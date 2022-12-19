const express            = require('express')
const router             = express.Router()
const isAuth	         = require('../app/api/middlewares/isAuth')
const excerciseLogController = require('../app/api/controllers/excercise_logs')

router.post('/', isAuth, excerciseLogController.create)
router.delete('/', isAuth, excerciseLogController.destroy)
router.get('/', isAuth, excerciseLogController.get)

module.exports = router
