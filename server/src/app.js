//
// Packages -------------------------------------------------------------------
//

const express = require('express') // server
const bodyParser = require('body-parser') // for processing json data
const cors = require('cors') // allow any clients to access
const morgan = require('morgan') // log generator

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//
// Routes ---------------------------------------------------------------------
//

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

//
// Start Server ---------------------------------------------------------------
//

app.listen(process.env.PORT || 8082)
