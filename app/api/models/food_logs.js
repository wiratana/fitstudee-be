const mongoose	 = require('mongoose')

const FoodLogSchema = new mongoose.Schema({
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
	created_at:{type:Date, default:Date.now()},
    name: String,
    category: String,
    description: String,
    cal: Number
})

module.exports = mongoose.model('FoodLog', FoodLogSchema)
