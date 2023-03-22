const jwt = require('jsonwebtoken')

const createToken = (payload) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET_KEY)
}

module.exports = createToken