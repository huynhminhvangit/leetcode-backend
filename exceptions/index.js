

const errorHandler = (err, req, res, next) => {
    console.log('I am a error handler')
    // TODO
    next()
}

module.exports = {
    errorHandler
}