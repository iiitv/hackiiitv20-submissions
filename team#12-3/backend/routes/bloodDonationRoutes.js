const express = require('express');
const router = express.Router();

const bloodDonationController = require('../controller/bloodDonationController');

router.get('/', bloodDonationController.getList);
router.get('/:id', bloodDonationController.getRequestList);
router.get('/user/:id', bloodDonationController.getRequestUser);
router.get('/getRequest/:id', bloodDonationController.getRequest);
// router.put('/', bloodDonationController.update);
// router.delete('/:id', bloodDonationController.remove);
// router.post('/login', bloodDonationController.login);
router.post('/new', bloodDonationController.donateBloodRequest);
router.post('/fixSlot', bloodDonationController.fixSlot);
router.post('/confirmBloodDonation/:id', bloodDonationController.confirmBloodDonation);
router.post('/remove/:id', bloodDonationController.remove);

module.exports = router;