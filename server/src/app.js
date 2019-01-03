//
// Packages -------------------------------------------------------------------
//

const express = require('express') // server
const bodyParser = require('body-parser') // for processing json data
const cors = require('cors') // allow any clients to access
const morgan = require('morgan') // log generator
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//
// Routes ---------------------------------------------------------------------
//

//
// Status
//

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

//
// Register
//

app.post('/register', (req, res) => {
  res.send({
    message: `Hello, ${req.body.email}! You are now registered! Have fun!`
  })
})

//
// Start Server ---------------------------------------------------------------
//

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8082)
    console.log(`Server started on port ${config.port}`)
  })
