const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

async function createUser (req, res) {
  try {
    console.log('Creating a new user...')
    const newUser = await User.create(req.body);
    res.status(201).json(newUser)
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
}

module.exports = {createUser}