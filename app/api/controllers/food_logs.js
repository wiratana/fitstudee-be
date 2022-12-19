require('dotenv').config()

const foodLogModel  = require('../models/food_logs')
const jwt           = require('jsonwebtoken')

module.exports = {
    get: async function(req, res, next){
        try{
            const food_logs = await foodLogModel.find({
                    _userId: await jwt.verify(
                        req.headers["authorization"].split(" ")[1], 
                        process.env.ACCESS_TOKEN_SECRET
                    )._id
                }).limit(10)
            if(!food_logs) return res.send("food_logs doesn't exists")

            return res.status(200).json(food_logs)
        } catch (error) {
            next(error)
        }
    },
    create: async function (req, res, next){
        const food_log = await foodLogModel({
                _userId: await jwt.verify(
                            req.headers["authorization"].split(" ")[1], 
                            process.env.ACCESS_TOKEN_SECRET
                        )._id,
		foods: req.body 
            })
            
        try{
            await food_log.save()
            return res.send(food_log)
        } catch (error) {
            next(error)
        }	
    },
    destroy: async function(req, res, next){
        try{
            const food_log = await foodLogModel.deleteOne(req.body)
            res.status(200).json(food_log)
        } catch (error) {
            next(error)
        }
    }
}
