const ReportDoctor = require('../models/ReportDoctor');

const getList = async (req,res) => {
    try{
        console.log('in getList api');
        const doctorList = await ReportDoctor.find();
        res.json(doctorList);
    }catch(err){
        res.json(err);
    }
}

const get = async (req,res) => {
    try{
        console.log('in get api');
        const userReport = await ReportDoctor.findById(req.params.id);
        res.json(userReport);
    }catch(err){
        res.json(err);
    }
}

const addReport = async (req,res) => {
    try{
        console.log('in addReport api');
        const report = new ReportDoctor({
            doctorName: req.body.doctorName,
            userEmail: req.body.userEmail,
            reason: req.body.reason
        });
        const obj = await report.save();
        res.json(obj);
    }catch(err){
        res.json(err);
    }
} 

module.exports = { getList, get, addReport};