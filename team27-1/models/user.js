//import the MongoDB module 
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let jwt = require('jsonwebtoken');
//import dotenv module
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

let User = new Schema({
    name: {type: String, required: true},
    bio: {type: String, required: false, default: "Lorem Ipsum"},
    email: {type: String, required: true},
    about1: {type: String, default: null},
    about2: {type: String, default: null},
    about3: {type: String, default: null},
    isPage: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    isSuperAdmin: {type: Boolean, default: false},
    superAdminType: {type: String, default: null}, //CM-Campus Manager,MC-Mess Committee,FD-Finance Dept.,AD-Administration,RG-Registrar
    password: {type: String, required: true, index:true, sparse:true},
    username: {type: String, required: true, index:true, sparse:true},
    following: [{
        _id: 0,
        friend: {type: String,}
    }],
    followers: [{
        _id: 0,
        friend: {type: String,}
    }],
    tokens: [{
    token: {type: String},
    _id: 0
    }]
})



//create a mongodb model with the name 'User' and Schema User
let user = mongoose.model('User', User);

//export the model to use it in main files
module.exports = user;