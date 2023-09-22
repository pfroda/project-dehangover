const express = require('express');
const router = express.Router();

const hangoverController = require('../controllers/hangoverController');


// Add and get hangovers
router.post('/hangover', hangoverController.postHangover);
router.get('/hangover/user/:id', hangoverController.getUserHangovers)

module.exports = router;