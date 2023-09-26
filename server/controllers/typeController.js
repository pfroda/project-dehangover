const Type = require('../models/Type');

async function getTypes (req, res) {
  try {
    const Types = await Type.find();
    res.status(201).json(Types);

  } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Error fetching drink types'})
  }
}

async function getSelectedType (req, res) {
  // Get the 'q' query parameter for the search query
  const { q } = req.query; 

  try {
    // Perform a case-insensitive search
    const types = await Type.find({ name: { $regex: q, $options: 'i' } }); 
    res.json(types);
    
  } catch (error) {
    res.status(500).json({ error: 'Error fetching selected drink type' });
  }
}

module.exports = {getTypes, getSelectedType}