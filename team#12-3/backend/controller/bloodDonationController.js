const BloodDonationRequest = require('../models/BloodDonationRequest');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getList = async (req,res) => {
    try{
        console.log('in getList api');
        const bloodDonationList = await BloodDonationRequest.find();
        res.json(bloodDonationRequestList);
    }catch(err){
        res.json(err);
    }
}

const getRequestList = async (req,res) => {
    try{
        console.log('in getRequestList api');
        const bloodDonationRequestList = await BloodDonationRequest.find({hospitalId: req.params.id});
        res.json(bloodDonationRequestList);
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
            userId: req.body.userId
        });
        const obj = await newRequest.save();
        res.json(obj);
    }catch(err){
        res.json(err);
    }
}

module.exports = { getList, getRequestList, donateBloodRequest};