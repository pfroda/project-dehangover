
const router = require('./router')
const drinkController = require('../controllers/drinkController');




// Add and get drinks
router.post('/stats', drinkController.postDrink);

module.exports = router;