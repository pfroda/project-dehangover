const Type = require('../models/Type');


async function getTypes (req, res) {
  try {
    const Types = await Type.find();
    res.status(201).json(Types);

  } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Internal server error'})
  }
}

async function getSelectedType (req, res) {
  const { q } = req.query; // Get the 'q' query parameter for the search query

  try {
    const types = await Type.find({ name: { $regex: q, $options: 'i' } }); // Perform a case-insensitive search
    res.json(types);
    
  } catch (error) {
    res.status(500).json({ error: 'Error fetching drink types' });
  }
};

module.exports = {getTypes, getSelectedType}