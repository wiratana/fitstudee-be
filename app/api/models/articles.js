const mongoose	 = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: String,
    image_path: {type:String,default: "./base.jpg"},
    created_at: {type:Date,default: Date.now()},
    text: String
})

module.exports = mongoose.model('Article', ArticleSchema)
