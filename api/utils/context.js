const Authentication = require('./auth');
const { User } = require('../auth/models');
const { Order } = require('../orders/models');

class Context {
    constructor();

    // get context parameters from req object
    generateContext = async(req) => {

        // Defining context
        var context = {}

        var user = null;
        if (req.headers.accesstoken) {
            const auth = new Authentication();
            const userId = auth.verifyAccessToken(req.headers.accesstoken);
            user = await User.findById(userId);
        }
        context.user = user;
        context.pageId = req.body.pageId;

        if (req.body.pageId == "") {
            
        }

        return context;
    }

    pageIdtoTag = {
        
    }

    mapContextToTags = async(context) => {
        // mapping context to tags
        var tags = [];
        if (!context.user) {
            tags.push("accountCreation");
            tags.push("startInvesting");
        } else {
            if (!context.user.kycStatus) {
                tags.push("KYC");
            }
        }
        
        return tags;
    }
}