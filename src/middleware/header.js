module.exports = () => {
    return function (req, res, next) {
        const anu = req.url
        const headers = req.headers
        const headerUserId = headers['user-id']
        const headerScope = headers['scope']

        if (headerUserId === 'foo' && headerScope === 'bar') {
            next()
        } else {
            res.status(401)
                .json({
                    'responseCode': 401,
                    'responseMessage': 'UNAUTHORIZED'
                })
        }
    }
}
