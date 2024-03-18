const crypto = require('crypto')

const decryptWithPrivateKey = (privateKey, encryptedMessage) => {
    return crypto.privateDecrypt(privateKey, encryptedMessage)
}

module.exports.decryptWithPrivateKey = decryptWithPrivateKey