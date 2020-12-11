const BloodDonationRequest = require('../models/BloodDonationRequest');

const getList = async (req,res) => {
    try{
        console.log('in getList api');
        const bloodDonationList = await BloodDonationRequest.find();
        res.json(bloodDonationRequestList);
    }catch(err){
        res.json(err);
    }
}

const getRequestList = async (req,res) => {    // request list of a hospital
    try{
        console.log('in getRequestList api');
        const bloodDonationRequestList = await BloodDonationRequest.find({hospitalId: req.params.id});
        res.json(bloodDonationRequestList);
    }catch(err){
        res.json(err);
    }
}

const getRequestUser = async (req,res) => {    
    try{
        console.log('in getRequestList api');
        const bloodDonationRequestUser = await BloodDonationRequest.findOne({userId: req.params.id});
        res.json(bloodDonationRequestUser);
    }catch(err){
        res.json(err);
    }
}

const getRequest = async (req,res) => {
    try{
        console.log('in getRequest api');
        const bloodDonation = await BloodDonationRequest.findById(req.params.id);
        res.json(bloodDonation);
    }catch(err){
        res.json(err);
    }
}

const donateBloodRequest = async (req,res) => {
    try{
        console.log('in donateBloodRequest api');
        console.log(req.body);
        const newRequest = new BloodDonationRequest({
            hospitalId: req.body.hospitalId,
            userId: req.body.userId,
            userName: req.body.userName
        });
        const obj = await newRequest.save();
        res.json(obj);
    }catch(err){
        res.json(err);
    }
}

const fixSlot = async (req,res) => {
    try{
        console.log('in fixSlot api');
        console.log(req.body);
        const obj = await BloodDonationRequest.findByIdAndUpdate(req.body._id, 
            { $set: {
                appointmentDate: req.body.date,
                appointmentTime: req.body.time
            } } );
        res.json(obj);
    }catch(err){
        res.json(err);
    }
}

module.exports = { getList, getRequestList, getRequestUser, getRequest, donateBloodRequest, fixSlot};