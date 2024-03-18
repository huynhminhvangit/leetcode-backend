const express = require('express')
const { login, register, getProfile } = require('../controllers/auth.controller')
const { middlewareAuth } = require('../middleware')
const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.get('/profile', middlewareAuth, getProfile)

module.exports = router