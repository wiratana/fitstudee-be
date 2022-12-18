const express        = require('express')
const router         = express.Router()
const userController = require('../app/api/controllers/users')
const isAuth	     = require('../app/api/middlewares/isAuth')

router.post('/register', isAuth, userController.create)

module.exports = router
