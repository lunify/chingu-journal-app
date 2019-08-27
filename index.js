const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  morgan('dev')
)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { console.info(`Successfuly connected to port ${PORT}`) })
