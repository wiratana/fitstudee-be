require('dotenv').config()

const excerciseLogModel  = require('../models/excercise_logs')
const jwt           = require('jsonwebtoken')

module.exports = {
    get: async function(req, res, next){
        try{
            const excercise_logs = await excerciseLogModel.find({
                    _userId: await jwt.verify(
                        req.headers["authorization"].split(" ")[1], 
                        process.env.ACCESS_TOKEN_SECRET
                    )._id
                }).limit(10)
            if(!excercise_logs) return res.send("excercise_logs doesn't exists")

            return res.status(200).json(excercise_logs)
        } catch (error) {
            next(error)
        }
    },
    create: async function (req, res, next){            
        try{
            const excercise_logs = await excerciseLogModel.insertMany(req.body)
            
            if(!excercise_logs) return res.send("excercise_logs doesn't exists")
            
            return res.send(excercise_logs)
        } catch (error) {
            next(error)
        }	
    },
    destroy: async function(req, res, next){
        try{
            const excercise_log = await excerciseLogModel.deleteOne(req.params)
            
            res.status(200).json(excercise_log)
        } catch (error) {
            next(error)
        }
    }
}
