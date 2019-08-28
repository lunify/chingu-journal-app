const omit = require('lodash.omit')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')

module.exports = { register, login }

async function register(req, res) {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).send()
  }

  try {
    var user = await UserModel.create({ username, password })
  } catch (err) {
    if (err.name == 'ValidationError') {
      const response = []
      for (error in err.errors) {
        response.push(err.errors[error].message)
      }

      return res.json({ errors: response })
    } else if (err.name == 'MongoError' && err.code == 11000) {
      return res.json({ errors: ['username already exists'] })
    }

    return res.status(500).send()
  }

  return res.json({ user: getSafeUserWithToken(user.toObject()) })
}

async function login(req, res) {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).send()
  }

  try {
    var user = await UserModel.findOne({ username })
  } catch (err) {
    return res.status(500).send()
  }

  if (!user || !(await user.verifyPassword(password))) {
    return res.json({ errors: ['invalid credentials'] })
  }

  return res.json({ user: getSafeUserWithToken(user.toObject()) })
}

// Helpers ***************************
function getSafeUserWithToken(userObj) {
  userObj.token = getUserToken(userObj)
  return omit(userObj, ['password', '__v'])
}

function getUserToken({ id, username }) {
  const secret = process.env.JWT_SECRET || 'secret'

  return jwt.sign(
    { id, username },
    secret,
    { expiresIn: '90d' }
  )
}
