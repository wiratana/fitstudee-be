const mongoose	 = require('mongoose')

const Excercise = new mongoose.Schema({
    name: String,
    description: String,
    burn: Number
})

const ExcerciseLogSchema = new mongoose.Schema({
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
	created_at:{type:Date, default:Date.now()},
    excercises:[Excercise]
})

module.exports = mongoose.model('ExcerciseLog', ExcerciseLogSchema)
