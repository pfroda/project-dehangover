const express = require('express');
const router = express.Router();

const typeController = require('../controllers/typeController');




// Add and get drinks
router.get('/type', typeController.getTypes);

module.exports = router;