const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const pathToPubKey = path.join(__dirname, '../tools', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToPubKey, 'utf8');

const standardExpressCallback = (req, res, next) => {
    console.log('I am the standard Express function')
    // TODO: 
    next()
}

const middlewareAuth = (req, res, next) => {
    if (!req.headers && !req.headers.authorization) {
        res.status(401).json({ success: false, msg: "You are not authorized to visit this route" });
    }
    const tokenParts = req.headers.authorization.split(' ');

    if (tokenParts[0] === 'Bearer' && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {

        try {
            const verification = jsonwebtoken.verify(tokenParts[1], PUB_KEY, { algorithms: ['RS256'] });
            req.jwt = verification;
            next();
        } catch (err) {
            res.status(401).json({ success: false, msg: "You are not authorized to visit this route" });
        }

    } else {
        res.status(401).json({ success: false, msg: "You are not authorized to visit this route" });
    }
}

module.exports = {
    standardExpressCallback,
    middlewareAuth
}