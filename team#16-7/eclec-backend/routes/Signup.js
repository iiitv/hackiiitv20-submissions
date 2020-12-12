var express = require('express');
var router = express.Router();
var SignupModel = require("../modals/Signup")
const mongoose = require('mongoose'); 
  
// Database Connection 
mongoose.connect('mongodb+srv://creator:nnNN@@22@cluster0.xayvg.mongodb.net/eclec_user/UserId',{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 
/* GET users listing. */
router.get('/Sign_up', function(req, res, next) {
  res.send('respond with a resource');
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
      console.log(res)
    }
  })
  next();

});

module.exports = router;
