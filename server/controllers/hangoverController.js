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
};

async function getUserHangovers (req, res) {
    try {
      console.log('Getting user hangovers...');
      const userHangovers = await Hangover.find({user: req.params.id});
      res.status(201).json(userHangovers)
  
    } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Internal server error'})
    }
  }

module.exports = {postHangover, getUserHangovers}