const mongoose = require('mongoose')

const ProblemSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Problem title is required'],
        },
        category: {
            type: String,
            required: [true, 'Problem category is required'],
        },
        difficulty: {
            type: String,
            required: [true, 'Problem difficulty is required'],
        },
        likes: {
            type: Number,
            required: false,
            default: 0
        },
        dislikes: {
            type: Number,
            required: false,
            default: 0
        },
        order: {
            type: Number,
            required: false
        },
        videoId: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        slug: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Problem = mongoose.model('Problem', ProblemSchema)
module.exports = Problem
