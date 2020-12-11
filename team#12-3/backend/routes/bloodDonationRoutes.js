const express = require('express');
const router = express.Router();

const bloodDonationController = require('../controller/bloodDonationController');

router.get('/', bloodDonationController.getList);
router.get('/:id', bloodDonationController.getRequestList);
// router.post('/register', bloodDonationController.register);
// router.put('/', bloodDonationController.update);
// router.delete('/:id', bloodDonationController.remove);
// router.post('/login', bloodDonationController.login);
router.post('/new', bloodDonationController.donateBloodRequest);

module.exports = router;