const express = require('express');
const router = express.Router();

const typeController = require('../controllers/typeController');




// Search for types of drinks
router.get('/type', typeController.getTypes);

module.exports = router;