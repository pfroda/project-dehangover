const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

// Create and login user
router.post('/signup', userController.createUser);
router.post('/signin', userController.loginUser);

module.exports = router;