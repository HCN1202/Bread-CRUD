const express = require('express')
require('dotenv').config()
const breadControllers = require('./controllers/bread')

const app = express()

app.use('/breads',breadControllers)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))