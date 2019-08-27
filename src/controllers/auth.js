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

  return res.json({ user: user.toObject() })
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

  if (!user || user.password !== password) {
    return res.json({ errors: ['invalid credentials'] })
  }

  return res.json({ user: user.toObject() })
}
