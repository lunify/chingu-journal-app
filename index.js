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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { console.info(`Successfuly connected to port ${PORT}`) })
