const Authentication = require('./auth');
const { User } = require('../auth/models');
const { Order } = require('../orders/models');

class Context {
    constructor(){};

    // page ids to tags
    pageIdtoTag = {
        exploreStocks: "stocks",
        exploreMF: "mutualfunds",
        orders: "orders"
    };

    // get context parameters from req object
    async generateContext(req) {

        // Defining context
        var context = {}

        var user = null;
        if (req.headers.accesstoken) {
            const auth = new Authentication();
            const userId = auth.verifyAccessToken(req.headers.accesstoken);
            user = await User.findById(userId);
            context.user = user;
        }
        if (req.query.pageId) {
            context.pageTag = this.pageIdtoTag[req.query.pageId];
        }
        return context;
    }

    // mapping context to tags
    async mapContextToTags(context) {
        
        var tags = [];

        if (!context.user) {
            tags.push("accountcreation");
        } else {
            if (!context.user.kycStatus) {
                tags.push("kyc");
            }
            if (Order.find({userId: context.user.userId}).length === 0) {
                tags.push("startinvesting");
            }
        }
        if (context.pageTag) {
            tags.push(context.pageTag)
        }   
        return tags;
    }
}

module.exports = Context;