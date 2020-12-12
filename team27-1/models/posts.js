//import the MongoDB module 
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let jwt = require('jsonwebtoken');
//import dotenv module
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*Create a new model/object by the name of User
 *whenever a new user signs up this creates a new user object in the database*/
let posts = new Schema({
    photo: String,
    id: String,
    post: String,
    tag: String,
    forType: {type: String, default: "Admin"},
    likes: [{
        by: String
    }],
    comments: [{
        comment: String,
        by: String,
        timestamp : { type: Date, default: Date.now} 
    }]
}, {
    timestamps: {
        createdAt: 'timestamp'
    }
});



//create a mongodb model with the name 'User' and Schema User
let postdb = mongoose.model('posts', posts);

//export the model to use it in main files
module.exports = postdb;