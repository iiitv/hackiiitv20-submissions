const express = require('express');
const router = express.Router();

const reportDoctorController = require('../controller/reportDoctorController');

router.get('/', reportDoctorController.getList);
router.get('/:id', reportDoctorController.get);
router.post('/addReport', reportDoctorController.addReport);

module.exports = router;