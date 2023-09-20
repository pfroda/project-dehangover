const mongoose = require('./db');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email']
  },
  password: {
      type: String,
      required: [true, 'Please enter a password'],
  },
  firstName: {
    type: String,
    required: true
  }
});

// encrypting password - fire a function before doc saved to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        console.log('incorrect password')
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const User = mongoose.model('user', userSchema);
module.exports = User