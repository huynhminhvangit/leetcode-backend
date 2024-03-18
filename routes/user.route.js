const express = require('express')
const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/user.controller')
const { middlewareAuth } = require('../middleware')
const router = express.Router()

router.get('/', middlewareAuth, getUsers)

router.post('/', middlewareAuth, createUser)

router.get('/:id', middlewareAuth, getUser)

router.put('/:id', middlewareAuth, updateUser)

router.delete('/:id', middlewareAuth, deleteUser)

module.exports = router