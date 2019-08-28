const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 12

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
  },
  notes: [{
    title: {
      type: String,
      required: [true, 'title is required'],
      minlength: [5, 'notes title should be at least 5 characters long'],
      maxlength: [80, 'notes should be at most 80 characters long'],
      trim: true
    },
    body: {
      type: String,
      required: [true, 'body is required'],
      trim: true
    }
  }]
})

userSchema.pre('save', async function encryptPassword() {
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})

userSchema.methods.verifyPassword = function verifyPassword(password) {
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('user', userSchema)
