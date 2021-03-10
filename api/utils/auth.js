var jwt = require('jsonwebtoken');

class Authentication {
    constructor() {
        this.secertKey = process.env.SECRET_KEY || "secret!";
    }
    
    createAccessToken(userId) {
        const payload = {
            sub: userId,
            iat: Date.now()
        }
        const token = jwt.sign(payload, this.secertKey, {expiresIn: (60*60*24*15)})
        return token;
    }

    verifyAccessToken(token) {
        try {
            var data = jwt.verify(token, this.secertKey);
            return data.sub;
        } catch(e) {
            console.log(e);
            return null;
        }
        
    }
}

module.exports = Authentication;


