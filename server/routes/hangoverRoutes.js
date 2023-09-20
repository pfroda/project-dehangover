const express = require('express');
const router = express.Router();

const hangoverController = require('../controllers/hangoverController');




// Add and get drinks
router.post('/hangover', hangoverController.postHangover);

module.exports = router;