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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { console.info(`Successfuly connected to port ${PORT}`) })
