const mongoose = require('./db');

const drinkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  type: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: true
  },
  dateConsumed: {
    type: Date,
    default: Date.now,
    required: true
    },
  numConsumptions: {
    type: Number,
    required: true
  },
  hangover: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Hangover'
  }
}, {
  timestamps: true
});

const Drink = mongoose.model('drink', drinkSchema);

module.exports = Drink;