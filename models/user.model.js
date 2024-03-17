const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'User name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            default: 0
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            default: 0
        },
        avatar: {
            type: String,
            required: false
        },
        likedProblems: {
            type: Array,
            required: false
        },
        dislikedProblems: {
            type: Array,
            required: false
        },
        starredProblems: {
            type: Array,
            required: false
        },
        solvedProblems: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', UserSchema)
module.exports = User
