const mongoose	 = require('mongoose')
const bcrypt     = require('bcrypt')
const saltRounds = 10

const UserDetailSchema = new mongoose.Schema({
    initialization_status: {type: Boolean, default: true},
    height: Number,
    weight: Number,
    age: Number,
    body_preference: Number,
    level: Number
})

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    detail: UserDetailSchema
})

UserSchema.pre('save', async function  (next) {
    this.password = await bcrypt.hash(this.password, saltRounds)
    next()
})

module.exports = mongoose.model('User', UserSchema)
