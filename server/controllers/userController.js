const User = require('../models/User');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

async function createUser (req, res) {
    const {firstName, email, password} = req.body
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    console.log('Creating a new user...')
    const newUser = await User.create({
        firstName,
        email,
        password: passwordHash
    });
    res.status(201).json({
      id: newUser.id,
      firstname: newUser.firstName,
      email: newUser.email,
      createdAt: newUser.createdAt
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal server error'})
  }
}

async function loginUser (req, res) {
    const {email, password} = req.body
  try {
    const user = await User.findOne({email});

    if (!user) {
      res.status(500).json({error: `User doesn't exist`})
    }

    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) throw new Error();
    res.status(201).json({
      id: user.id,
      firstname: user.firstName,
      email: user.email,
      createdAt: user.createdAt
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal server error'})
  }
};


module.exports = {createUser, loginUser}