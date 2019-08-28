const UserModel = require('../models/user')

module.exports = { createNote }

async function createNote(req, res) {
  const { title, body } = req.body
  const { userId } = req.query

  if (!title || !body || !userId) {
    return res.status(400).send()
  }

  try {
    var user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { notes: { title, body } } },
      { new: true, runValidators: true }
    )
  } catch (err) {
    if (err.name == "ValidationError") {
      const response = [];
      for (error in err.errors) {
        response.push(err.errors[error].message);
      }

      return res.json({ errors: response });
    }

    return res.status(500).send()
  }

  if (!user) {
    return res.json({ errors: ['user not found'] })
  }

  return res.json({ notes: user.toObject().notes })
}
