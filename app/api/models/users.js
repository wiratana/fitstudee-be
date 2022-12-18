const mongoose	 = require('mongoose')
const bcrypt     = require('bcrypt')
const saltRounds = 10

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

UserSchema.pre('save', async function  (next) {
    this.password = await bcrypt.hash(this.password, saltRounds)
    next()
})

module.exports = mongoose.model('User', UserSchema)
