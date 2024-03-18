const express = require('express')
const { login, register, getProfile } = require('../controllers/auth.controller')
const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/profile', getProfile)

module.exports = router