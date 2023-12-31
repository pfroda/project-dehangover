const mongoose = require('./db');

const hangoverSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  hangoverScore: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  hangoverComments: {
    type: String
  },
  hangoverDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

const Hangover = mongoose.model('Hangover', hangoverSchema);

module.exports = Hangover