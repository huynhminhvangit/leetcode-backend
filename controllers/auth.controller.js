const User = require('../models/user.model.js')
const { generatePassword, issueJWT, validPassword } = require('../utils/index.js')

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(401).json({ success: false, message: 'Email not found' })
        }
        const isValid = validPassword(password, user.hash, user.salt)

        if (isValid) {
            const jwt = issueJWT(user)

            res.status(200).json({ success: true, tokenType: jwt.tokenType, token: jwt.token, expiresIn: jwt.expires })
        } else {
            res.status(401).json({ success: false, message: 'Incorrect password' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const register = async (req, res, next) => {
    try {
        const { email, password, name } = req.body
        const saltHash = generatePassword(password)

        const salt = saltHash.salt
        const hash = saltHash.hash

        const newUser = new User({
            name: name,
            email: email,
            hash: hash,
            salt: salt
        })

        const user = await newUser.save()
        const jwt = issueJWT(user)
        res.json({ success: true, user: user, tokenType: jwt.tokenType, token: jwt.token, expiresIn: jwt.expires })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = {
    login,
    register
}