const express = require('express')
const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/user.controller')
const router = express.Router()

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router