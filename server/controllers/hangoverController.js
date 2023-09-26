const Hangover = require('../models/Hangover');

async function postHangover(req, res) {
  try {
    const newHangover = await Hangover.create(req.body);
    res.status(201).json(newHangover)

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error posting hangover'})
  }
}

async function getUserHangovers (req, res) {
    try {
      const userHangovers = await Hangover.find({user: req.params.id});
      res.status(201).json(userHangovers)
  
    } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Error getting user hangovers'})
    }
  }

module.exports = {postHangover, getUserHangovers}