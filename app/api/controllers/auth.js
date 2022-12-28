require('dotenv').config()

const userModel  = require('../models/users')
const tokenModel = require('../models/tokens')
const bcrypt     = require('bcrypt')
const jwt        = require('jsonwebtoken')

module.exports = {
    login: async function (req, res, next){	
	try{
	    const user = await userModel.findOne({name:req.body.name})
	
	    if(!user)
		res.status(404).send("user doesn't exist")

	    if(!(await bcrypt.compare(req.body.password, user.password)))
		res.status(404).send("password doesn't match")
	    
	    const tokens = {
        userId: user._id,
		accessToken: jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, {expiresIn:"1d"}),
		refreshToken: jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET, {expiresIn:"30m"})
	    }
	    
	    tokenModel.deleteMany({_userId:user._id}).then(() => {
		const refreshToken    = new tokenModel()
		refreshToken._userId  = user._id 
		refreshToken.token    = tokens.refreshToken
		refreshToken.expireAt = new Date((new Date).getTime() + (20*60*1000))
		refreshToken.save()
	    }) 
	    
	    res.status(200).json(tokens)
	} catch (error) {
	    next(error)
	}	
    },    
    refresh: async function (req, res, next){
	try{
	    const token = await tokenModel.findOne({token:req.body.token})
	    const user  = await userModel.findOne({_id:token._userId})

	    if(!token) res.status(400).send("refresh token invalid")

	    const tokens = {
		accessToken: jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, {expiresIn:"15m"}),
		refreshToken: jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET, {expiresIn:"30m"})
	    }

	    tokenModel.deleteMany({_userId:user._id}).then(()=>{
		const refreshToken    = new tokenModel()
		refreshToken._userId  = user._id
		refreshToken.token    = tokens.refreshToken
		refreshToken.expireAt = new Date((new Date).getTime() + (20*60*1000))
		refreshToken.save()
	    }) 
	    
	    res.status(200).json(tokens)
	} catch (error) {
	    next(error)
	}
    },
    logout: async function (req, res, next){
	try{
	    const token = await tokenModel.deleteOne({token:req.body.token})
	    res.status(200).json(token)
	} catch (error) {
	    next(error)
	}
    }
}
