const express = require('express')
const { getProblems, createProblem, getProblem, deleteProblem, updateProblem } = require('../controllers/problem.controller')
const { middlewareAuth } = require('../middleware')
const router = express.Router()

router.get('/', middlewareAuth, getProblems)

router.post('/', middlewareAuth, createProblem)

router.get('/:id', middlewareAuth, getProblem)

router.put('/:id', middlewareAuth, updateProblem)

router.delete('/:id', middlewareAuth, deleteProblem)

module.exports = router