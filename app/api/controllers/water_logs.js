require('dotenv').config()

const waterLogModel = require('../models/water_logs')
const jwt           = require('jsonwebtoken')

module.exports = {
    get: async function(req, res, next){
        try{
            const water_logs = await waterLogModel.find({
                    _userId: await jwt.verify(
                        req.headers["authorization"].split(" ")[1], 
                        process.env.ACCESS_TOKEN_SECRET
                    )._id
                }).limit(10)
            if(!water_logs) return res.send("water_logs doesn't exists")

            return res.status(200).json(water_logs)
        } catch (error) {
            next(error)
        }
    },
    create: async function (req, res, next){
        const water_log = await waterLogModel({
                _userId: await jwt.verify(
                            req.headers["authorization"].split(" ")[1], 
                            process.env.ACCESS_TOKEN_SECRET
                        )._id,
                amount: req.body.amount
            })
            
        try{
            await water_log.save()
            return res.send(water_log)
        } catch (error) {
            next(error)
        }	
    },
    destroy: async function(req, res, next){
        try{
            const water_log = await waterLogModel.deleteOne(req.params)
            res.status(200).json(water_log)
        } catch (error) {
            next(error)
        }
    }
}
