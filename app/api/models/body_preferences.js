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

const FoodCategory = new mongoose.Schema({
    name: String,
    description: String,
    foods:[Food]
})

const levelPack  = new mongoose.Schema({
    level: Number,
    excercises: [Excercise],
    food_categories: [FoodCategory]
})

const BodyPreference = new mongoose.Schema({
    name: String,
    image_path: {type:String,default: "./base.jpg"},
    description: String,
    status: Boolean,
    level_packs: [levelPack]
})

module.exports = mongoose.model('BodyPreference', BodyPreference)