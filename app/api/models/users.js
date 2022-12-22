const mongoose	 = require('mongoose')
const bcrypt     = require('bcrypt')
const saltRounds = 10

const UserDetailSchema = new mongoose.Schema({
    initialization_status: {type: Boolean, default: true},
    height: Number,
    weight: Number,
    sex: String,
    bmi: Number,
    status: String,
    calories_need: Number,
    age: Number,
    body_preference: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'BodyPreference'
    },
    level: Number
})

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    detail: UserDetailSchema
})

module.exports = mongoose.model('User', UserSchema)
