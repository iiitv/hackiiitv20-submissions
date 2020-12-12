//import the MongoDB module 
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let jwt = require('jsonwebtoken');
//import dotenv module
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

/*Create a new document to temporarily store user's registration link*/
let Register = new Schema({
    email: String,
    id: String,
    expire_at: {type: Date, default: Date.now, expires: 3600} 
})



//create a mongodb model with the name 'Register' and Schema Register
let register = mongoose.model('Register', Register);

//export the model to use it in main files
module.exports = register;