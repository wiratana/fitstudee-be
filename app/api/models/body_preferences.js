const mongoose	 = require('mongoose')

const Excercise       = new mongoose.Schema({
    name: String,
    description: String,
    burn: Number
})

const Food = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    cal: Number
})

const levelPack  = new mongoose.Schema({
    level: Number,
    excercises: [Excercise],
    foods: [Food]
})

const BodyPreference = new mongoose.Schema({
    name: String,
    image_path: {type:String,default: "./base.jpg"},
    description: String,
    status: Boolean,
    level_packs: [levelPack]
})

module.exports = mongoose.model('BodyPreference', BodyPreference)