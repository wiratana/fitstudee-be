const express            = require('express')
const router             = express.Router()
const isAuth	         = require('../app/api/middlewares/isAuth')
const waterLogController = require('../app/api/controllers/water_logs')

router.post('/', isAuth, waterLogController.create)
router.delete('/', isAuth, waterLogController.destroy)
router.get('/', isAuth, waterLogController.get)

module.exports = router
