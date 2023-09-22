const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

// Create, login and find user
router.post('/signup', userController.createUser);
router.post('/signin', userController.loginUser);
// router.get('/profile', userController.findUser);

module.exports = router;