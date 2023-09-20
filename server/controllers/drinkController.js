const Drink = require('../models/Drink');

async function postDrink (req, res) {
  try {
    console.log('Drinking...')
    const newDrink = await Drink.create(req.body);
    res.status(201).json(newDrink)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
}

async function deleteDrink (req, res) {
  try {
    console.log('Deleting drink...');
    await Drink.deleteOne({_id: req.params.id});
    res.status(201).json('Drink deleted')

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
}

async function updateDrinkNum (req, res) {
  const drinkId = req.params.id;
  const newNum = req.body.numConsumptions;

  try {
    console.log('Updating drink...');
    const updatedDrink = await Drink.findByIdAndUpdate(drinkId, {numConsumptions: newNum});
    res.status(201).json(updatedDrink)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error updating drink'})   
  }
}

async function getUserDrinks (req, res) {
  try {
    console.log('Getting user drinks...');
    const userDrinks = await Drink.find({user: req.params.id});
    res.status(201).json(userDrinks)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
}

module.exports = {postDrink, updateDrinkNum, deleteDrink, getUserDrinks}