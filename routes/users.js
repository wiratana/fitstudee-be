const express        = require('express')
const router         = express.Router()
const userController = require('../app/api/controllers/users')
const isAuth	     = require('../app/api/middlewares/isAuth')

router.post('/register', userController.create)
router.get('/detail/:id', isAuth, userController.detail)
router.patch('/initial-setup/:_id', isAuth, userController.initial_setup)

module.exports = router
