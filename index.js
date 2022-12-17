require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const app      = express()
const users    = require('./routes/users')

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@prognet.tnozzjt.mongodb.net/?retryWrites=true&w=majority`).catch(error => handleError(error))
mongoose.connection.on('error', (err) => console.log(err))
mongoose.connection.once('open', () => console.log('Database Connected'))

app.use(express.json())
app.use('/users', users)

app.listen(process.env.PORT, () => {     
    console.log(`running at port : ${process.env.PORT}`)
})
