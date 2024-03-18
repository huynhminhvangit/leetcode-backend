const express = require('express')
const { getProblems, createProblem, getProblem, deleteProblem, updateProblem, getProblemBySlug } = require('../controllers/problem.controller')
const { middlewareAuth } = require('../middleware')
const router = express.Router()

router.get('/', getProblems)

router.post('/', middlewareAuth, createProblem)

router.get('/:id', middlewareAuth, getProblem)

router.get('/slug/:slug', middlewareAuth, getProblemBySlug)

router.put('/:id', middlewareAuth, updateProblem)

router.delete('/:id', middlewareAuth, deleteProblem)

module.exports = router