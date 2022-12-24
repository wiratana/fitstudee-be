const express            = require('express')
const router             = express.Router()
const isAuth	         = require('../app/api/middlewares/isAuth')
const foodLogController = require('../app/api/controllers/food_logs')

router.post('/', isAuth, foodLogController.create)
router.delete('/:_id', isAuth, foodLogController.destroy)
router.get('/', isAuth, foodLogController.get)

module.exports = router
