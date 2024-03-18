const Problem = require('../models/problem.model.js')

const getProblems = async (req, res) => {
    try {
        const problems = await Problem.find({})
        res.status(200).json(problems)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProblem = async (req, res) => {
    try {
        const { id } = req.params
        const problem = await Problem.findById(id)
        res.status(200).json(problem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProblem = async (req, res) => {
    try {
        const problem = await Problem.create(req.body)
        res.status(201).json(problem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProblem = async (req, res) => {
    try {
        const { id } = req.params
        const problem = await Problem.findByIdAndUpdate(id, req.body)
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' })
        }

        const problemUpdate = await Problem.findById(id)
        res.status(200).json(problemUpdate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProblem = async (req, res) => {
    try {
        const { id } = req.params
        const problem = await Problem.findByIdAndDelete(id)
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' })
        }

        res.status(200).json({ message: 'Problem deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProblems,
    getProblem,
    createProblem,
    updateProblem,
    deleteProblem
}