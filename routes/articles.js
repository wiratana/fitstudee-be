const express           = require('express')
const router            = express.Router()
const isAuth	        = require('../app/api/middlewares/isAuth')
const articleController = require('../app/api/controllers/articles')

router.post('/', isAuth, articleController.create)
router.patch('/', isAuth, articleController.update)
router.delete('/', isAuth, articleController.destroy)
router.get('/', articleController.get)
router.get('/:id', articleController.detail)

module.exports = router
