const Database = require("./database.js");
const posts = require('../models/posts.js');
const User = require('./user.js');
const postdb = require("../models/posts.js");
class post extends Database {
    constructor() {
        super();
        console.log("Posts Class Accessed");
    }

    async createPost(data,req){  
        if (data.post != "") {              
            let postdb = new posts()        
            postdb.id = data.id;            
            postdb.post = data.post;        
            postdb.tag = data.tag;         
            if (req.files != null) {        
                postdb.photo = req.files.postphoto.data.toString("base64")
            }
            try {
            await postdb.save();
            return postdb;
            }
            catch (err) {
                console.err("An error occured while creating a post:\n"+err)
            }
        } 
        
        else if (req.files != null) {
            let postdb = new posts()
            postdb.id = data.id;
            postdb.photo = req.files.postphoto.data.toString("base64")
            try {
                await postdb.save();
                return postdb;
                }
                catch (err) {
                    console.err("An error occured while creating a post:\n"+err);
                }
            }
        }
}

module.exports = post