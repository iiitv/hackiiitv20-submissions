//import the MongoDB module 
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//import dotenv module
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

/*Create a new Chat in the database*/
let Chat = new Schema({
    chatid: {type: String, required: true},
    messages : [new Schema({
        message: String,
        timestamp: String,
        by: String
    }, {_id: false})]
})



//create a mongodb model with the name 'Chat' and Schema Chat
let page = mongoose.model('Chat', Chat);

//export the model to use it in main files
module.exports = page;