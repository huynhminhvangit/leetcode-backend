require('dotenv').config()
const express = require('express')
const passport = require('passport')
const cors = require('cors')

const app = express()

// Configures the database and open a global connection
require('./config/database.js')

// Pass the global passport object into the configuration function
require('./config/passport.js')(passport)

app.use(passport.initialize())

const problemRoute = require('./routes/problem.route.js')
const userRoute = require('./routes/user.route.js')
const authRoute = require('./routes/auth.route.js')
const { standardExpressCallback } = require('./middleware/index.js')
const { errorHandler } = require('./exceptions/index.js')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(standardExpressCallback)

// Allows our Angular application to make HTTP requests to Express application
app.use(cors());

// error handler
app.use(errorHandler)

// routes
app.use('/api/users', userRoute)
app.use('/api/problems', problemRoute)
app.use('/api/auth', authRoute)


app.get('/', (req, res) => {
    res.json({ message: 'hello world' })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})