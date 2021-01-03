const express = require('express');
const router = express.Router();

const doctorController = require('../controller/doctorController');

router.get('/', doctorController.getList);
router.get('/:id', doctorController.get);
router.post('/register', doctorController.register);
router.put('/', doctorController.update);
router.delete('/:id', doctorController.remove);
router.post('/login', doctorController.login);

module.exports = router;