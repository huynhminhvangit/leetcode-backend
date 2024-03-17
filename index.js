require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRoute = require('./routes/user.route.js')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// routes
app.use('/api/users', userRoute)

// Connect db
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Connected to Database!!')
        app.listen(3001, () => {
            console.log('Server is running on port 3001')
        })
    })
    .catch(() => {
        console.log('Connection Database failed!!')
    })



app.get('/', (req, res) => {
    res.send('hello world')
})
