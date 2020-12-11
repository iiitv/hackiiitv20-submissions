const mongoose = require('mongoose');

const reportDoctorSchema = new mongoose.Schema({
    doctorName: {
        type: String
    },
    userName: {
        type: String,
        unique: true
    },
    reason: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('ReportDoctor', reportDoctorSchema);