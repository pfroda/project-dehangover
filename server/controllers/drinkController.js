const Drink = require('../models/Drink');

async function postDrink(req, res) {
  try {
    console.log('Drinking...')
    const newDrink = await Drink.create(req.body);
    res.status(201).json(newDrink)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
}

module.exports = {postDrink}