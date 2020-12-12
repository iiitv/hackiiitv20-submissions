const express = require("express")
const bodyParser = require("body-parser")
const app = express();
var SignupModel = require("./modals/Signup")
const mongoose = require('mongoose'); 
const cors = require('cors')


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
  
// Database Connection 
app.use(cors());

/* GET users listing. */
app.post('/Sign_up', function(req, res, next) {
  // res.send('respond with a resource');
//  console.log(req.body.fname)
console.log(req.body.fname)
  mongoose.connect('mongodb+srv://creator:nnNN@@22@cluster0.xayvg.mongodb.net/eclec_user',{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 
console.log(req)
  let details = new SignupModel({
   firstname:req.body.fname,
   lastname: req.body.lname,
   email: req.body.email,
   password:req.body.password,
   address:req.body.address,
   state:req.body.state
  })

  details.save(function (err,res){
    if(err){
      console.log(err)
    }
    else{
      console.log("succesufully saved")
      console.log(res);
    }
  })
  

});
app.post("/login",(req,res,next)=>{
  mongoose.connect('mongodb+srv://creator:nnNN@@22@cluster0.xayvg.mongodb.net/eclec_user',{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 
console.log(req.body)
  var email = req.body.usremail;
  var passwordSearch = req.body.password;
  SignupModel.find()
  SignupModel
  .find({
    password: passwordSearch   // search query
  })
  .then(doc => {
    console.log("get"+doc)
    if(doc===""){
      console.log("not found")
    }
  })
  .catch(err => {
    console.error(err)
  })
  next();
  
})
app.get("/",(req,res)=>{
  res.send("connected");
})


app.listen("9000",()=>console.log("connected to 9000"));