const Authentication = require('./auth');
const { User } = require('../auth/models');
const { Order } = require('../orders/models');

class Context {
    constructor(){};

    // page ids to tags
    pageIdtoTag = {
        exploreStocks: "Stocks",
        exploreMF: "Mutual Funds",
        orders: "Orders"
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
        context.pageTag = this.pageIdtoTag[req.query.pageId];

        return context;
    }

    // mapping context to tags
    async mapContextToTags(context) {
        
        var tags = [];

        if (!context.user) {
            tags.push("Account Creation");
        } else {
            if (!context.user.kycStatus) {
                tags.push("KYC");
            }
            if (Order.find({userId: context.user.userId}).length === 0) {
                tags.push("Start Investing");
            }
        }
        tags.push(context.pageTag)
        return tags;
    }
}

module.exports = Context;