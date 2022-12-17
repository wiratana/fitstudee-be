const mongoose	 = require('mongoose')
const bcrypt     = require('bcrypt')
const saltRounds = 10

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

UserSchema.pre('save', function(next){
    this.password = bcrypt.hash(this.password, saltRounds)
    next()
})

User          = mongoose.model('User', UserSchema)

module.exports = User
