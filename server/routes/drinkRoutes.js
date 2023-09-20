const express = require('express');
const router = express.Router();

const drinkController = require('../controllers/drinkController');




// Add and get drinks
router.post('/stats', drinkController.postDrink);

module.exports = router;