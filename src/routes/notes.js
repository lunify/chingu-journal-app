const notes = require('../controllers/notes')

module.exports = function setupNotesRoutes(router) {
  router.post('/', notes.createNote)
}