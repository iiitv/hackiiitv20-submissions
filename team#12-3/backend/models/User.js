const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dob: {
        type: Date
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);