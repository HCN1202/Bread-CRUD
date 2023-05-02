const express = require('express')
require('dotenv').config()
const breadControllers = require('./controllers/bread')

const app = express()

//middleware
// MIDDLEWARE
app.use(express.static('public'))
app.use(express/express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/breads',breadControllers)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))