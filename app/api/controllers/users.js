const userModel = require('../models/users')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')

module.exports = {
    create: async function (req, res, next){
	console.log(req.body)
	console.log(userModel)
	const user = userModel(req.body)
	try{
	    await user.save()
	    res.send(user)
	} catch (error) {
	    next(error)
	}	
    },    
}
