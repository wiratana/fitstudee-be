const mongoose	 = require('mongoose')

const WaterLogSchema = new mongoose.Schema({
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
	created_at:{type:Date, default:Date.now()},
	amount:Number
})

module.exports = mongoose.model('WaterLog', WaterLogSchema)