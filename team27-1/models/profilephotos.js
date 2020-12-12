//import the MongoDB module 
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let jwt = require('jsonwebtoken');
//import dotenv module
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

/*Create a new document to store profilephoto of a user*/
let Profilephotos = new Schema({
    profilephoto: String,
    id: String
})



//create a mongodb model with the name 'profilephotos' and Schema profilephotos
let profilephotos = mongoose.model('profilephotos', Profilephotos);

//export the model to use it in main files
module.exports = profilephotos;