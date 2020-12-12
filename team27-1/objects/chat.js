const Database = require("./database");
const chat_model = require('../models/chat.js')

class Chat extends Database {
    constructor() {
        super();
    }

    async createChat(chatid){
        try {
        let chat = new chat_model({'chatid': chatid, 'messages': []});
        await chat.save();
        }
        catch (err) {
            console.err("An error occured while saving your data: \n"+err);
        }
    }

    async getMessages(chatid) {
        try {
        let chat = await this.showdb('chat',{'chatid': chatid});
        return chat;
        }
        catch (err) {
            console.err("An error occured while grabbing the chat's messages.");
        }
    }
}

module.exports = Chat;