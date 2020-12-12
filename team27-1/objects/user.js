const user = require('../models/user.js');
const Database = require('./database.js');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const Post = require('./post.js');
const Profilephotos = require('./profilephotos.js');
const Register = require('../models/register.js');
const Random = require('./random.js')
const secretKey = process.env.cryptosecret || "your-crypto-secret-key"
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});


//class User inherits class database which adds various functionalities to it 
class User extends Database {

    constructor(Data) {
        super(); 
        let data = Data; 
        this.getData = () => { 
            return data; 
        }
    }

    async generateRegisterLink(email) {
        let link = new Register();
        link.email = email;
        link.id = new Random().randomString(16);
        await link.save();
        return link;
    }

    async sendRegisterMail(email,res){
        let tempregister= await this.generateRegisterLink(email);
        let link = process.env.hosturl+'/signup/'+tempregister.id;
            let mailOptions = {
                from: process.env.email,
                to:email,
                subject:'Registration Link for Project 27',
                html:`<h1>Hello! Thanks for registering on Project 27!</h1><br>
                        <h3>To verify your email and continue registration please click on the link below:</h2><br>
                        <a href="${link}">Click here to get started!</a><br>
                        <p><i>If this was not you, please ignore this mail.</i></p><br>` 
                }
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  res.send("An error occured while sending email, please make sure your email is correct, or try again later.");
                } else {
                  console.log('Email sent: ' + info.response);
                  res.send("Please check your email for the verification link.")
                }
              });
              
    
}

    async createUser(req,page=false) {

        let bool = await this.findExisting(this.getData().username,null,this.getData().email); 
        if (bool === null){
            let flag = 1;
            let newUser = new user(this.getData());
            let cryptedPassword = CryptoJS.AES.encrypt(this.getData().password, secretKey)
            newUser.password = cryptedPassword;
            if (req.files!=null){
            await new Profilephotos().assignProfilePhoto(req, newUser);
            if (page==false) { //to prevent Parallel Save Error in MongoDB
            try {
                await newUser.save();
                console.log("A new user has been registered. The Data is as follows:\n" + newUser);
                }
        
        catch(err) {
            console.log("An error occured while saving your data:\n" + err);
            flag = 0;
        }

        }
        else {
            newUser.isPage = true;
        }
            if (flag === 1) {
                return newUser;
            } else {
                return null;
            }
        }
        else {
            return(null)
        }
     } else {
            return null;
        }

    }

    async loginCheck(username, password) {
        let user = await this.findExisting(username, password);
        return user;
    }

    async generateToken(User, res) {
        if (User != null) {
            let userid = User._id;
            const accessToken = jwt.sign(User.toJSON(), process.env.JWT_KEY);
            res.cookie('Authorization', accessToken, {
                maxAge: 1000000000000,
                httpOnly: false
            });

            let userdata = await user.findById(userid);
            await userdata.tokens.push(accessToken);
            await userdata.save();
            res.redirect('/home')
        } else {
            res.send('Wrong credentials');
        }
    }

    async logout(user, req, res, all = false) {
        if (all === false) {
            let token = req.cookies.Authorization;
            res.clearCookie("Authorization");
            user.tokens = user.tokens.filter(ele => {
                return ele._id != token;
            })
            await user.save();
        } else if (all === true) {
            user.tokens = [];
            console.log('Cleared all tokens');
            await user.save();
            let token = req.cookies.Authorization;
            res.clearCookie("Authorization");
        } else {
            res.send('Invalid Argument');
        }
    }




    async getDashboard(req){
        let following = [];
        let database = new User()
        let post = await this.showdb('post',{'id': req.user._id},true);  
        for (const ele of req.user.following) {
            let name = await database.showdb('User', {'_id': ele.friend});
            following.push(name.name);
        }
        let profilephoto = await this.showdb('profilephotos',{"id": req.user._id.toString()})
        profilephoto = profilephoto.profilephoto;
    return {
       post,
       user: req.user,
       profilephoto,
       following     
    }
    }
    

    async getComplaints(user={},help=false,super_admin=false,forType="Admin") {
        let post = [],
            by = [],
            profilepic = [];
            let postdb;
        if(user==={}){
             postdb = await new Post().showdb('post');
        }
        else {
             postdb= await new Post().showdb('post',{'id':user._id},true);
        }
        for (let i = 0; i < postdb.length; i++) {
            if(postdb[i].tag=="Complaint" && help==false){        
                    profilepic.push(await new Profilephotos().showdb('profilephotos',{'id': (postdb[i].id)}))
                    post.push(postdb[i]);
                    by.push(await new User().showdb('User', {'_id': postdb[i].id}))
            }
            else if(help==true && super_admin===false){
                profilepic.push(await new Profilephotos().showdb('profilephotos',{'id': (postdb[i].id)}))
                post.push(postdb[i]);
                by.push(await new User().showdb('User', {'_id': postdb[i].id}))
            }
            else if (postdb[i].tag=="Help" && super_admin===true && postdb[i].forType==forType){
                profilepic.push(await new Profilephotos().showdb('profilephotos',{'id': (postdb[i].id)}))
                post.push(postdb[i]);
                by.push(await new User().showdb('User', {'_id': postdb[i].id}))
            }
        }
        return {post,by,profilepic};
    }
    async getAnnouncements(user={}) {
        let post = [],
            by = [],
            profilepic = [];
            let postdb;
            postdb = await new Post().showdb('post');
        
        for (let i = 0; i < postdb.length; i++) {
            let tag = "Announcement";
                if (postdb[i].tag==tag) {
                    profilepic.push(await new Profilephotos().showdb('profilephotos',{'id': (postdb[i].id)}))
                    post.push(postdb[i]);
                    by.push(await new User().showdb('User', {'_id': postdb[i].id}))
                }
        }
        return {post,by,profilepic};
    }
}







module.exports = User;