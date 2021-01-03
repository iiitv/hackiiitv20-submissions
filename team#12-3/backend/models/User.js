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
    },
    totalBloodDonations: {
        type: Number,
        default: 0
    },
    totalOrganDonations: {
        type: Number,
        default: 0
    },
    lastBloodDonationDate: {
        type: Date
    },
    currentBloodDonationRequest: {
        type: Boolean,
        default: false
    },
    currentOrganDonationRequest: {
        type: Boolean,
        default: false
    },
    currentBloodDonationHospital: {
        type: String
    },
    currentOrganDonationHospital: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);