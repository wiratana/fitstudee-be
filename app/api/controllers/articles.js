const articleModel = require('../models/articles')

module.exports = {
    create: async function (req, res, next){
	const article = await articleModel(req.body)
	try{
	    await article.save()
	    return res.send(article)
	} catch (error) {
	    next(error)
	}	
    },    
    update: async function(req, res, next){
	try{
	    articleModel.findOneAndUpdate({_id:req.body._id}, req.body, {upsert: true},
	    function(err, doc){
		if (err) return res.send(500, {error: err});
		return res.send('Succesfully saved.'); 
	    })
	} catch (error) {
	    next(error)
	}
    },
    get: async function(req, res, next){
	try{
	    const articles = await articleModel.find({}).limit(10)

	    if(!articles) res.send("articles doesn't exists")

	    res.status(200).json(articles)
	} catch (error) {
	    next(error)
	}
    },
    detail: async function(req, res, next){
	try{
	    const article = await articleModel.findOne(req.params)

	    if(!article) res.send("article doesn't exists")

	    res.status(200).json(article)
	} catch (error) {
	    next(error)
	}
    },
    destroy: async function(req, res, next){
	try{
	    const article = await articleModel.deleteOne(req.body)
	    res.status(200).json(article)
	} catch (error) {
	    next(error)
	}
    }
}
