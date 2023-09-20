const mongoose = require('./db');

const drinkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  drink: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Drink', required: true
  },
  dateConsumed: {
    type: Date,
    required: true
    },
  numConsumptions: {
    type: Number,
    required: true
  }
});

const Drink = mongoose.model('drink', drinkSchema);

module.exports = Drink;