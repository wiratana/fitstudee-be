const mongoose	 = require('mongoose')

const Food = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    cal: Number
})

const FoodLogSchema = new mongoose.Schema({
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
	created_at:{type:Date, default:Date.now()},
    foods:[Food]
})

module.exports = mongoose.model('FoodLog', FoodLogSchema)
