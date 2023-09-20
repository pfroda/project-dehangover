const Hangover = require('../models/Hangover');

async function postHangover(req, res) {
  try {
    console.log('Hangover...')
    const newHangover = await Hangover.create(req.body);
    res.status(201).json(newHangover)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
}

module.exports = {postHangover}