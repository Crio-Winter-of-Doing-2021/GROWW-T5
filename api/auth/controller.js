const { User } = require('./models');
const Authentication = require('../utils/auth')

exports.regsiterUser = async(req, res) => {
    // #swagger.tags = ["auth"]   
    /* #swagger.parameters["email"] = {
            in: "headers"
    }*/
    /* #swagger.parameters["password"] = {
            in: "headers"
    }*/ 
    /* #swagger.parameters["name"] = {
            in: "headers"
    }*/ 
    try{
        var { name, email, password } = req.headers;
        var user = await User.findOne({ email: email});
        if(!user){
            user = new User({name, email, password});
            user.setPasswordAndSave(password);
            res.json({msg: "Success"});
        } else {
            res.status(409).json({msg: "Conflict"});
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({msg: err});
    }
    
}

exports.loginUser = async(req,res) => {
    //  #swagger.tags = ["auth"]
    /*  #swagger.parameters["email"] = {
            in: "headers"
    }*/
    /*  #swagger.parameters["password"] = {
            in: "headers"
    }*/
    var {email, password} = req.headers;
    try {
        var user = await User.findOne({email: email});
        if(!user) {
            res.status(404).json({msg: "Not Found"});
        } else {
            if (await user.verifyPassword(password)) {
                const auth = new Authentication();
                const token = auth.createAccessToken(user.id);
                res.status(200).json({token: token});
            } else {
                res.status(401).json({msg: "Unauthorized"});
            }
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({msg: e})
    }
}

exports.logoutUser = async(req,res) => {
    // #swagger.tags = ["auth"]
    res.json({msg: "Success"});
}

exports.updateKycStatus = async(req,res) => {
    // #swagger.tags = ["auth"] 
    try{
        var user = await User.findByIdAndUpdate(req.data, {kycStatus: true});
        res.status(200).json({msg: "Success"});
    } catch(e) {
        console.log(e);
        res.status(500).json({msg: "Server Error"});
    }
}