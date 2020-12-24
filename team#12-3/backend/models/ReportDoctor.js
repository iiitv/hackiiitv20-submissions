const mongoose = require('mongoose');

const reportDoctorSchema = new mongoose.Schema({
    doctorName: {
        type: String
    },
    userEmail: {
        type: String
    },
    reason: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('ReportDoctor', reportDoctorSchema);