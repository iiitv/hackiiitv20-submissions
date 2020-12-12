const User = require('../objects/user.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();
async function authenticateToken(req,res,next){
    const token = req.cookies.Authorization;
    
    if(!token){ req.user = null;
    next();
    return req.user;
    }
    
    try {
        const verified = jwt.verify(token,process.env.JWT_KEY)
        let users = await new User().showdb('User');
        let tokens = [];
        users.forEach(user=>{
            user.tokens.forEach(t=>{
                tokens.push(t._id);
            })
        })
        let existing = tokens.find(t=>t===token);
        if(existing){
        req.user = await new User().showdb('User',{'_id': verified});
        next();    
        }
        else{
            req.user=null;
            next();
            return req.user;
        }
    }
    catch (err) {
        res.send('An error occured while verifying token:\n'+err);
        next();
    }
    
}

module.exports = authenticateToken;