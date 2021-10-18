module.exports = () => {
    return function (req, res, next) {
        const anu = req.url
        const headers = req.headers

        console.log('Request: ', req)

        next()
    }
}
