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
    result: {
        type: Boolean
    },
    details: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('BloodDonationRequest', bloodDonationRequestSchema);