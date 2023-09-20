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

module.exports = {getTypes}