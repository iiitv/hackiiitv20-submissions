let Database = require('./database.js');
let Profilephotos = require('../models/profilephotos.js')
class profilephoto extends Database{
    constructor(){
        super();
    }

    async assignProfilePhoto(req,status){
        let pfp = new Profilephotos({
            id: await status._id,
            profilephoto: req.files.profilephoto.data.toString("base64")
        });
        await pfp.save();
    }
}

module.exports = profilephoto;