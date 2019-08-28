const Router = require('express').Router
const setupAuthRoutes = require('./auth')
const setupNotesRoutes = require('./notes')

module.exports = function setupRoutes(app) {
  const authRouter = Router()
  app.use('/api/auth', authRouter)
  setupAuthRoutes(authRouter)

  const notesRouter = Router()
  app.use('/api/notes', notesRouter)
  setupNotesRoutes(notesRouter)
}
