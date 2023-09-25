const Drink = require('../models/Drink');
const Type = require('../models/Type');

async function postDrink (req, res) {
  try {
    const newDrink = await Drink.create(req.body);
    res.status(201).json(newDrink)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error adding drink'})
  }
}

async function deleteDrink (req, res) {
  try {
    await Drink.deleteOne({_id: req.params.id});
    res.status(201).json('Drink deleted')

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error deleting drink'})
  }
}

async function updateDrinkNum (req, res) {
  const drinkId = req.params.id;
  const newNum = req.body.numConsumptions;

  try {
    const updatedDrink = await Drink.findByIdAndUpdate(drinkId, {numConsumptions: newNum});
    res.status(201).json(updatedDrink)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error updating drink'})   
  }
}

async function getUserDrinks (req, res) {
  try {
    const userDrinks = await Drink.find({user: req.params.id})
    .populate('type')
    .exec()
    console.log(userDrinks)
    res.status(201).json(userDrinks)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error getting drink'})
  }
}

module.exports = {postDrink, updateDrinkNum, deleteDrink, getUserDrinks}