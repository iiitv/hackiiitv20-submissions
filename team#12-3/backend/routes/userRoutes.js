const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/', userController.getList);
router.get('/:id', userController.get);
router.post('/register', userController.register);
router.put('/', userController.update);
router.delete('/:id', userController.remove);
router.post('/login', userController.login);

module.exports = router;