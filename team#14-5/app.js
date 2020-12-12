//jshint esversion:6

// require('dotenv').config();
const express= require("express");
const bodyParser= require("body-parser");
const ejs= require("ejs");
const mongoose= require("mongoose");




const app= express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));



mongoose.connect("mongodb://localhost:27017/peerDB",{useNewUrlParser :true,useUnifiedTopology: true});


const peerSchema= {
  name: String,
  email:String,
  password:String,
  solution: String,
  coins: Number

};

var defaultCoins=10;
var defCoins=10;
var newname= "";



const Peer = mongoose.model("Peer",peerSchema);

const listSchema= {
  name: String,
  items: [peerSchema]
}
const List = mongoose.model("List", listSchema);




app.get("/",function(req,res){
  res.render("home");
});

app.get("/login",function(req,res){
  res.render("login");
});

app.get("/register",function(req,res){
  res.render("register");
});

app.get("/queries",function(req,res){
   Peer.find({"solution":{$ne:null}},function(err,foundPeers){
     if(err)
     {
       console.log(err);
     }
     else{
       if(foundPeers)
       {
         res.render("queries",{peersWithSolutions:foundPeers,logername:newname});
       }
     }
   });

});

app.get("/thanks",function(req,res)
{
    defaultCoins += 5;

    Peer.findOne({name:"amit"},function(err,foundPeer){
      res.render("thanks",{studentName:foundPeer.name});
    });

    Peer.findOne({name:"ayush"},function(err,foundPeer){
         defCoins -= 3;
    });


});

app.get("/offers",function(req,res)
{
  res.render("offers");
});

app.get("/logout",function(req,res){
  res.redirect("/");
});

app.get("/submit",function(req,res){

 res.render("submit");

});



app.get("/amit",function(req,res)
{


Peer.findOne({name:"amit"},function(err,foundPeer)
{
  if(!err)
  {
    if(foundPeer)
    {
      foundPeer.coins=defaultCoins;
      foundPeer.save(function(err)
    {
      if(!err)
      {
        res.render("list",{peerName:foundPeer.name, peerCoins: foundPeer.coins});
      }
    });
    }
  }
});

});

app.get("/ayush",function(req,res){
 Peer.findOne({name:"ayush"},function(err,foundPeer){
if(!err)
{
  if(foundPeer)
  {
    foundPeer.coins=defCoins;
    foundPeer.save(function(err)
    {
      if(!err)
      {
        res.render("prof",{peerName:foundPeer.name,peerCoins:foundPeer.coins});
      }
    });
  }
}

 });


});



app.post("/register",function(req,res){


const newPeer = new Peer({
  name: req.body.peername,
  email: req.body.peermail,
  password: req.body.password
});
newPeer.save(function(err){
  if(!err)
  {
    res.redirect("/login");
  }
});

});



app.post("/login",function(req,res){
const peerMail= req.body.peermail;
const peerPassword= req.body.password;

  Peer.findOne({email:peerMail},function(err,foundPeer)
{
  if(!err)
  {
    if(foundPeer)
    {
      if(foundPeer.password=== peerPassword)
      {

        newname= foundPeer.name;
        res.redirect("/queries");
      }
    }

  }
  else{
    console.log(err);
  }
});
});






app.post("/submit",function(req,res){
 const submittedSolution= req.body.solution;
 const submittedName= req.body.Name;


 Peer.findOne({name:submittedName},function(err,foundPeer)
{
  if(!err)
  {
    if(foundPeer)
    {
      foundPeer.solution= submittedSolution;
      foundPeer.save(function(err){
        if(!err)
        {
          res.redirect("/queries");
        }

      });
    }
  }
  else{
    console.log(err);
  }
});

});

// app.post("/ask",function(req,res){
//  const submittedQuestion= req.body.question;
//  const submitName= req.body.myname;
//
//
//  Peer.findOne({name:submitName},function(err,foundPeer)
// {
//   if(!err)
//   {
//     if(foundPeer)
//     {
//       foundPeer.question= submittedQuestion;
//       foundPeer.save(function(err){
//         if(!err)
//         {
//           res.redirect("/queries");
//         }
//         else
//         {
//           console.log('not saved');
//         }
//
//       });
//     }
//
//   }
//   else{
//     console.log(err);
//   }
// });
//
// });





app.listen(3000,function(){
  console.log("server is running at port 3000");
})
