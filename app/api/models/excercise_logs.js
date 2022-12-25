const mongoose	 = require('mongoose')

const ExcerciseLogSchema = new mongoose.Schema({
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
	created_at:{type:Date, default:Date.now()},
    name: String,
    description: String,
    burn: Number,
    duration: Number
})

module.exports = mongoose.model('ExcerciseLog', ExcerciseLogSchema)
