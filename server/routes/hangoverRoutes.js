const express = require('express');
const router = express.Router();

const hangoverController = require('../controllers/hangoverController');

// Add and get hangovers
router.post('/hangovers', hangoverController.postHangover);
router.get('/hangovers/user/:id', hangoverController.getUserHangovers)

module.exports = router;