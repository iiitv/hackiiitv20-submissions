const user = require('../models/user.js');
const Post = require('../models/posts.js');
const Profilephotos = require('../models/profilephotos.js');
const Chat = require('../models/chat.js')
const Register = require('../models/register.js')
const CryptoJS = require('crypto-js');
require('dotenv').config()
class Database {
    constructor() {
        if (this.constructor === Database) {
            throw new Error("Can't instantiate Abstract Class.");
        }
    }

    async showdb(classname, data = {}, all=false) { 
        if (classname.toLowerCase() === 'user') {
            classname = user;
        } 
        
        else if (classname.toLowerCase() === "post") {
            classname = Post;
        }
        
        else if(classname.toLowerCase()==="profilephotos"){
            classname = Profilephotos;
        }
        else if(classname.toLowerCase()==="chat") {
            classname = Chat;
        }
        else if(classname.toLowerCase()==="register") {
            classname = Register;
        }
        else {
            return console.err("An invalid class name was specified for the method showdb.")
        }
        try {
        if (JSON.stringify(data) === "{}") {
            return await classname.find({});
        } else {
            if (all==false) {
                return await classname.findOne(data);
            }
            else if(all==true) {
                return await classname.find(data);
            }
        }
    }
    catch (err) {
        console.err("An error occured while getting the data in showdb: "+err)
    }

    }


    async findExisting(username, password = null, email = null) {
        if (password === null) {
            let User = await user.findOne({'username': username}) || await user.findOne({'email': email});
            return User;
        } else {
            let User = await user.findOne({
                'username': username
            })
            if (User != null) {
                let temp = CryptoJS.AES.decrypt(User.password, process.env.cryptosecret);

                if (temp.toString(CryptoJS.enc.Utf8) === password) {
                    return User;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }

    async getModel(classname) {
    if(classname.toLowerCase()==='user'){    
        return user;
    }
    
    else if(classname.toLowerCase()==='post'){    
        return Post;
    }
    

    }
}
module.exports = Database;