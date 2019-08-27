const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: [true, 'username already exists'],
    minlength: [3, 'username should be at least 3 characters long'],
    maxlength: [20, 'username should be at most 20 characters long'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: [8, 'password should be at least 8 characters long'],
    trim: true
  }
})

module.exports = mongoose.model('user', userSchema)
