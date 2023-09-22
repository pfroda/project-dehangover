const mongoose = require('./db');
const { isEmail } = require('validator');
// const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      validate: [isEmail, 'Please enter a valid email']
  },
  password: {
      type: String,
      required: [true, 'Please enter a password'],
  }
  
}, {
    timestamps: true
});


const User = mongoose.model('user', userSchema);
module.exports = User