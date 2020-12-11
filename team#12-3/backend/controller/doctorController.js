const Doctor = require('../models/Doctor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getList = async (req,res) => {
    try{
        console.log('in getList api');
        const doctorList = await Doctor.find();
        res.json(doctorList);
    }catch(err){
        res.json(err);
    }
}

const get = async (req,res) => {
    try{
        console.log('in get api');
        const doctor = await Doctor.findById(req.params.id);
        res.json(doctor);
    }catch(err){
        res.json(err);
    }
}

const register = async (req,res) => {
    try{
        console.log('in register api');
        console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newDoctor = new Doctor({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.address,
            city: req.body.city,
            password: hashPassword
        });
        const doctor = await newDoctor.save();
        res.json(doctor);
    }catch(err){
        console.log(err);
        res.status(400).json({
            error: "Email already registered"
        });
    }
} 

const update = async (req,res) => {
    try{
        console.log('in update api');
        const doctor = {
            name: req.body.name,
            contact: req.body.contact,
            address: req.body.address,
            city: req.body.city
        };
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.body._id, doctor);
        res.json(updatedDoctor);
    }catch(err){
        res.json(err);
    }
}

const remove = async (req,res) => {
    try{
        console.log('in delete api');
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        res.json(deletedDoctor);
    }catch(err){
        res.json(err);
    }
}

const login = async (req,res) => {
    try {
        console.log('in login api');
        console.log(req.body);
        const doctor = await Doctor.findOne({email: req.body.email});
        if(doctor){
            const valid = await bcrypt.compare(req.body.password, doctor.password);
            if(!valid)
                res.status(401).json({             // 401-unauthorised
                    'error': 'Wrong Password'
                });
            
            const token = jwt.sign({ _id: doctor._id ,email: doctor.email, role: "doctor"}, 'TOKEN_SECRET');
            res.status(200).json({"token": token});
        }
        else{
            res.status(404).json({                      
                'error': 'Invalid Details'
            });
        }
    } catch (error) {
        res.status(400).json({                      //400-Bad Request
            'error': 'Unexpected Error'
        });
    }
}

module.exports = { getList, get, register, update, remove, login};