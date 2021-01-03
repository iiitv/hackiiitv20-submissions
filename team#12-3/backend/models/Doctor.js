const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    contact: {
        type: Number
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Doctor', doctorSchema);