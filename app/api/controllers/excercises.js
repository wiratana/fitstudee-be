const excerciseModel = require('../models/excercises')

module.exports = {
    create: async function (req, res, next){
        const body_preference = await excerciseModel(req.body)
        try{
            await body_preference.save()
            return res.send(body_preference)
        } catch (error) {
            next(error)
        }	
    },
    get: async function(req, res, next){
        try{
            const body_preference = await excerciseModel.findOne(req.params)

            if(!body_preference) return res.send("body preference doesn't exists")

            return res.status(200).json(body_preference)
        } catch (error) {
            next(error)
        }
    }
}
