//import dotenv module to access secret variables
require('dotenv').config()
//import express module, used to create the server
const express = require('express');
//import body parser, to handle JSON in request bodys
var bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
//create an express app
const app = express();
const User = require('./objects/user.js');
const Database = require('./objects/database.js');
const Post = require('./objects/post.js');
const Random = require('./objects/random.js');
const Chat = require('./objects/chat.js');
const authenticateToken = require('./middleware/authenticate.js');
var cookieParser = require('cookie-parser');
const user = require('./models/user.js');
const posts = require('./models/posts.js');
app.use(cookieParser());
//make express use body-parser's json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var fileupload = require('express-fileupload');
app.use(fileupload());
var Profilephotos = require('./objects/profilephotos.js');
const post = require('./objects/post.js');
//set json spaces to 2, used when serving JSON data
app.set('json spaces', 2);
const http = require('http');
//make public a static directory, to serve static files
app.use(express.static('public'));
//set view engine to ejs, which allows to embed JS into HTML
app.set('view engine', 'ejs');

var server = app.listen('3000', () => console.log("Listening to Port 3000"));

var io = require('socket.io')(server);

var validator = require('validator');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  });
app.get('/', authenticateToken, async function (req, res) {
    if (req.user != null) {
        console.log("Page boolean:", req.user.isPage);
        if (req.user.isAdmin==false && req.user.isSuperAdmin==false) {
            let obj = await new User().getDashboard(req);
            res.render((__dirname + '/public/views/dashboard/dashboard.ejs'), {
                user: obj.user,
                following: obj.following,
                profilephoto: obj.profilephoto,
                post: obj.post,
            });
        }
        else if(req.user.isAdmin==true){
                let data = await new User().getComplaints({});
                    let randomcolor = new Random().randomColor(true);
                    let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
                    res.render(__dirname + '/public/views/complaints/complaints.ejs', {
                        post: data['post'],
                        by: data['by'],
                        profilepic: data['profilepic'],
                        user: req.user,
                        randomcolor,
                        userprofilepic
                    });
        }
        else if(req.user.isSuperAdmin==true){
            let data = await new User().getComplaints({},true,true,req.user.superAdminType);
                let randomcolor = new Random().randomColor(true);
                let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
                res.render(__dirname + '/public/views/complaints/complaints.ejs', {
                    post: data['post'],
                    by: data['by'],
                    profilepic: data['profilepic'],
                    user: req.user,
                    randomcolor,
                    userprofilepic
                });
    }

     } 
    
     else {
        res.render(__dirname + '/public/views/login/login.ejs');
    }
})

app.get('/signup/:id', async (req, res) => {
    let id= req.params.id;
    let link;
    try {
    link= await new User().showdb('register',{'id':id});
    console.lo    }
    catch(err) {
        console.log("An error occured while checking your link. Please try registering again.")
    }
    if(link!=null){
    res.status(200).render(__dirname + '/public/views/signup/signup.ejs',{'id': id});
    }
    else{
        res.send('Email not verified!');
    }
})

app.get('/newsignup',authenticateToken,async(req,res)=>{
    if (req.user!=null) {
        return res.redirect('/');
    }
    else {
        res.render(__dirname+'/public/views/signup/newsignup.ejs');
    }
});

app.post('/newsignup', authenticateToken, async(req, res) => {
    if (req.user!=null) {
        return res.redirect('/');
    }
    else{
        let email = req.body.email;
        if (!validator.isEmail(email)) {
            res.send("Invalid Email Address.");
        }
        else {
        new User().sendRegisterMail(email,res);        
       }
    }
})

app.post('/signup/:id', async (req, res) => {
    let id= req.params.id;
    let link= await new User().showdb('register',{'id':id});
    if(link!=null){
    req.body.email = link.email;
    console.log(link);
    console.log(req.body);
    const user = await new User(req.body);
    let status = await user.createUser(req);
    
    console.log(status);
    if (!status) {
        res.send('You failed to register! Please make sure you entered all the data.')
    } 
    else {
        await link.remove();
        res.send(`Success!
        <script>
        setTimeout(function () {
           // after 2 seconds
           window.location = "/login";
        }, 1500)
      </script>`);
    }
}
else{
    res.send("Your email is not verified!");
}
})

app.get('/login', async (req, res) => {
    res.status(200).render(__dirname + '/public/views/login/login.ejs');
})

app.post('/login', async (req, res) => {
    //authenticate user 
    const {
        username,
        password
    } = req.body;
    let userObj = await new User(req.body);
    let user = await userObj.loginCheck(username, password);
    await userObj.generateToken(user, res);

})

app.get('/logout', authenticateToken, async (req, res) => {
    if (req.user != null) {
        await new User().logout(req.user, req, res); //polymorphism
        res.redirect('/');
    } else {
        res.redirect('/');
    }
})

app.get('/logoutall', authenticateToken, async (req, res) => {
    if (req.user != null) {
        await new User().logout(req.user, req, res, true); //polymorphism
        res.redirect('/');
    } else {
        res.redirect('/');
    }
})



app.get('/showdb', async (req, res) => {
    let db = await new User().showdb('User', {});
    res.status(200)
    res.type('json');
    res.send("User Database:\n\n" + JSON.stringify(db, null, "\t"))
})

app.get('/users', authenticateToken, async (req, res) => {
    if (req.user != null) {
        let obj = await new User().getFollowingList(req);
        res.render(__dirname + '/public/views/users/users.ejs', {
            users: obj.users,
            user: obj.user,
            profilepic: obj.profilepic,
            following: obj.following
        });
    } else {
        res.redirect('/');
    }
})



app.get('/adminproblem', authenticateToken, async (req, res) => {
    if (req.user != null) {
        let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
        res.render(__dirname + '/public/views/createcomplaint/createcomplaint.ejs', {
            user: req.user,
            userprofilepic
        });
    } else {
        res.redirect('/');
    }
})


app.post('/adminproblem', authenticateToken, async (req, res) => {
    req.body.id = req.user._id;
    req.body.tag = "Complaint";
    let newpost = new Post()
    let post = await newpost.createPost(req.body, req);
    let chat = await new Chat().createChat(post._id);
    res.redirect("/usercomplaints");
})


app.post('/createannouncement', authenticateToken, async (req, res) => {
    req.body.id = req.user._id;
    req.body.tag = "Announcement";
    let newpost = new Post()
    let post = await newpost.createPost(req.body, req);
    let chat = await new Chat().createChat(post._id);
    res.redirect("/announcements");
})


app.get('/complaints', authenticateToken, async (req, res) => {
    if (req.user!=null) {
        if (req.user.isAdmin===true||req.user.isSuperAdmin===true) {
            data = await new User().getComplaints();
            let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
            res.render(__dirname + '/public/views/complaints/complaints.ejs', {
                post: data['post'],
                by: data['by'],
                profilepic: data['profilepic'],
                user: req.user,
                userprofilepic
            });
        }
        else {
            res.send("Access Denied.");
        }
    }
    else {
        res.redirect('/');
    }
})

app.post('/resolve/:id', authenticateToken, async (req, res) => {
    if (req.user!=null) {
            let cid = req.params.id;
            complaint = await new Post().showdb('Post', {'_id': cid});
            await complaint.remove();
            let chatroom = await new Chat().getMessages(cid);
            await chatroom.remove();
    }
    else {
        res.redirect('/');
    }
})

app.post('/upgrade/:id/:branch', authenticateToken, async(req, res) => {
    if (req.user!=null && req.user.isAdmin===true) {
        console.log("nice")
        let cid = req.params.id;
        let branches = ["AD","MC", "CM", "FD", "RG"]
        let branch = req.params.branch;
        if ( branches.includes(branch)) {
            console.log("nic2")
            complaint = await new Post().showdb('Post', {'_id': cid});
        complaint.forType = branch;
        complaint.tag = "Help";
        await complaint.save();
        }
    }
    else {
        res.redirect('/');
    }
})

app.get('/chat/:id', authenticateToken, async (req, res) => {
    if (req.user!=null) {
        
        let roomid = req.params.id;
        let chat = await new Chat().getMessages(roomid);
        
        if (chat!=null) {
        io.once('connection', async socket => {
            socket.join(roomid)
            console.log(`${req.user.name} connected to Chatroom ID ${req.params.id}. Socket ID is: ${socket.id}`);
            io.to(roomid).emit('user connect', `${req.user.name} connected to the Chatroom.`);
            socket.on('disconnect', () => {
                console.log(`${req.user.name} disconnected from Chatroom ID ${req.params.id}.`)
                io.to(roomid).emit('user disconnect', `${req.user.name} disconnected from the Chatroom.`);
            });
            socket.on('chat message', async msg => {
                let timestamp = new Date().toLocaleString("en-GB", {timeZone: "Asia/Kolkata",month: "long",day:"2-digit",year:"numeric","hour":"2-digit","minute":"2-digit","second":"2-digit",hour12: true})
                console.log(`${req.user.name} sent a message to Chatroom ID ${req.params.id}: ${msg}`);
                io.to(roomid).emit('chat message', {msg, user: req.user.name, timestamp});
                chat.messages.push({'message': msg, 'timestamp': timestamp, 'by': req.user.name});
                await chat.save();

            });
        });
    res.render(__dirname + '/public/views/chat/chat.ejs',{user:req.user,chat,roomid});
        }
        else{
            res.send("This chat does not exist.")
        }
    }
})

app.post('/invitetochat/:id',authenticateToken,async(req,res)=>{
    if(req.user!=null){
        let id= req.params.id;
        let email=req.body.email;
        link=process.env.hosturl+'/chat/'+id;
        let mailOptions = {
            from: process.env.email,
            to:email,
            subject:"Invite For Chat",
            html:`<h1>You have been invited to a chatroom!</h1><br>
                    <a href="${link}">Click here to get started!</a><br>
                    <br>` 
            }
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              res.send("An error occured while sending email, please make sure your email is correct, or try again later.");
            } else {
              console.log('Email sent: ' + info.response);
              res.redirect('/chat/'+id);
            }
          });
    }
})

app.get('/usercomplaints',authenticateToken, async (req,res)=>{
    if (req.user!=null&&req.user.isAdmin==false&&req.user.isSuperAdmin==false) {
            let data = await new User().getComplaints(req.user,true);
            let randomcolor = new Random().randomColor(true);
            let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
            res.render(__dirname + '/public/views/complaints/usercomplaints.ejs', {
                post: data['post'],
                by: data['by'],
                profilepic: data['profilepic'],
                user: req.user,
                randomcolor,
                userprofilepic
            });
    }
    else {
        res.redirect('/');
    }
})

app.get('/help', authenticateToken, async (req, res) => {
    if (req.user!=null) {
        if (req.user.isSuperAdmin===true) {
            data = await new User().getComplaints({},true);
            let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
            console.log(userprofilepic);
            res.render(__dirname + '/public/views/complaints/complaints.ejs', {
                post: data['post'],
                by: data['by'],
                profilepic: data['profilepic'],
                user: req.user,
                userprofilepic
            });
        }
        else {
            res.send("Access Denied.");
        }
    }
    else {
        res.redirect('/');
    }
});

app.get('/home',authenticateToken,async(req,res)=>{
    if(req.user!=null){
        if(req.user.isAdmin==false && req.user.isSuperAdmin==false){
            res.render(__dirname+'/public/views/home/homepage.ejs');
        }
        else{
            res.redirect('/');
        }
    }
    
})


app.get('/announcements', authenticateToken, async (req, res) => {
    if (req.user!=null) {
        let data = await new User().getAnnouncements();
        let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
        res.render(__dirname + '/public/views/announcements/announcements.ejs', {
            post: data['post'],
            by: data['by'],
            profilepic: data['profilepic'],
            user: req.user,
            userprofilepic
        });
}
else {
    res.redirect('/');
}
})

app.get('/createannouncements',authenticateToken,async(req,res)=>{
    let data = await new User().getAnnouncements();
    let userprofilepic = await new User().showdb('profilephotos',{'id':req.user._id});
    res.render(__dirname+'/public/views/announcements/createannouncements.ejs',{
        post: data['post'],
        by: data['by'],
        profilepic: data['profilepic'],
        user: req.user,
        userprofilepic
    });
})

app.post('/post', authenticateToken, async (req, res) => {
    req.body.id = req.user._id;
    let newpost = new Post()
    if (req.body.tag=="Announcement") {
        if (req.isAdmin==false||req.isSuperAdmin==false){
            return;
        }
    }
    let post = await newpost.createPost(req.body, req);
    if (req.body.tag!="Announcement") {
        res.redirect('/post');
    }
    else {
        res.redirect('/announcements');
    }
})

//render 404 page, if the requested URL is wrong or doesn't exist on the server 
app.use(function (req, res, next) {
    res.status(404);
    res.render(__dirname + '/public/views/404/404.ejs', {
        url: req.url
    });
});

app.get('/keepalive', (req, res) => {
    res.send('Ping Recieved ' + Date.now())
    console.log('Ping Recieved ' + Date.now());
})

setInterval(function () {
    http.get(process.env.hosturl + '/keepalive');
}, 30000)