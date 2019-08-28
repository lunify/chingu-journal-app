const notes = require('../controllers/notes')

module.exports = function setupNotesRoutes(router) {
  router.post('/', notes.createNote)
  router.patch('/:id', notes.updateNote)
  router.delete('/:id', notes.deleteNote)
}
