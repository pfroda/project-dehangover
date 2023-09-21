const express = require('express');
const router = express.Router();

const typeController = require('../controllers/typeController');




// Search for types of drinks
router.get('/type', typeController.getTypes);
router.get('/type/search', typeController.getSelectedType);

module.exports = router;