const userModel = require('../models/users')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')

module.exports = {
    create: async function (req, res, next){
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const user = userModel(req.body)
        try{
            await user.save()
            res.send(user)
        } catch (error) {
            next(error)
        }	
    },
    initial_setup: async function(req, res, next){
        try{
            const user = await userModel.update(req.params, {$set:{detail:req.body}})

            if(!user) return res.send("user doesn't exists")
            
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },
    detail: async function(req, res, next){
        try{
            const user = await userModel.findOne(req.params)

            if(!user) res.send("user doesn't exists")
            
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}
