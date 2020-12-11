const mongoose = require('mongoose');

const bloodDonationRequestSchema = new mongoose.Schema({
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: {
        type: String
    },
    result: {
        type: Boolean
    },
    appointmentDate: {
        type: String
    },
    appointmentTime: {
        type: String
    },
    details: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('BloodDonationRequest', bloodDonationRequestSchema);