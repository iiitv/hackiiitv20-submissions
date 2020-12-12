let mongoose = require('mongoose')

let signUpSchema = new mongoose.Schema({
  firstname:{type:String,default:""},
  lastname:{type:String,default:""},
  email: {type:String,default:""},
  password:{type:String,default:""},
  address:{type:String , default:""},
  state:{type:String,default:""}
})

module.exports = mongoose.model('SignupDetails', signUpSchema);