if (process.env.NODE_ENV != 'production') {
  require('dotenv').config({ path: '.env.development.local' })
}

const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  morgan('dev')
)

app.get('/api', (req, res) => {
  res.json({ message: `${req.method} request on ${req.path} has been made` })
})

if (process.env.NODE_ENV == 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })
}

const setupAuthRoutes = require('./src/routes/auth')
const authRouter = express.Router()
setupAuthRoutes(authRouter)
app.use("/api/auth", authRouter)

const setupNotesRoutes = require('./src/routes/notes')
const notesRouter = express.Router()
setupNotesRoutes(notesRouter)
app.use("/api/notes", notesRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { console.info(`Successfuly connected to port ${PORT}`) })

const mongoose = require('mongoose')
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/v11-prework-journal'
mongoose.connect(
  DB_URI,
  { useNewUrlParser: true, useCreateIndex: true },
  () => console.info(`Connected to ${DB_URI}`)
)
