const fs = require('fs')
const { ExtractJwt, Strategy } = require('passport-jwt')
const path = require('path')
const User = require('../models/user.model')

const pathToKey = path.join(__dirname, '../tools', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf-8')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
}

const strategy = new Strategy(options, (payload, done) => {
    User.findOne({ _id: payload.sub })
    .then((user) => {
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
    .catch(err => done(null, err))
})



module.exports = (passport) => {
    passport.use(strategy)
}