const mongoose	 = require('mongoose')

const Excercise       = new mongoose.Schema({
    name: String,
    description: String,
    burn: Number
})

const ExcercisePack  = new mongoose.Schema({
    level: Number,
    excercises: [Excercise]
})

const BodyPreference = new mongoose.Schema({
    name: String,
    image_path: {type:String,default: "./base.jpg"},
    description: String,
    status: Boolean,
    excercise_packs: [ExcercisePack]
})

module.exports = mongoose.model('BodyPreference', BodyPreference)