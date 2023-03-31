const jwt = require('jsonwebtoken')
require('dotenv').config()
const authentication = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.key, (err, decoded) => {
            if (decoded) {
                req.body.admin = decoded.name
                req.body.adminID = decoded.adminID
                console.log(req.body)
                next()
            } else {
                res.status(401).send({ msg: "Admin is not Authorize", err: err.message })
            }
        })
    } else {
        res.status(401).send({ msg: "Invalid Token" })
    }
}

module.exports = { authentication }