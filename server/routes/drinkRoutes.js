const express = require('express');
const router = express.Router();

const drinkController = require('../controllers/drinkController');


// Add, delete, update and get user drinks
router.post('/drinks', drinkController.postDrink);
router.delete('/drinks/:id', drinkController.deleteDrink);
router.put('/drinks/:id', drinkController.updateDrinkNum);
router.get('/drinks/user/:id', drinkController.getUserDrinks);

module.exports = router;