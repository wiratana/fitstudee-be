require('dotenv').config()

const jwt = require('jsonwebtoken')

module.exports = function isAuth(req, res, next) {
    if(!req.headers.hasOwnProperty('authorization')) 
	return res.status(400).send("not authorize")

    const authHeader = req.headers["authorization"]    
    const token      = authHeader.split(" ")[1]

    if(!token) return res.status(400).send("token not present")

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	if(err) res.status(403).send("token invalid")	

	req.user = user
	next()
    })
}
