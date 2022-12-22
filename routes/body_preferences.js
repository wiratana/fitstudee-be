const express = require('express')
const router  = express.Router()
const isAuth  = require('../app/api/middlewares/isAuth')
const bodyPreferenceController = require('../app/api/controllers/body_preferences')

router.post('/', isAuth, bodyPreferenceController.create)
router.get('/:id', bodyPreferenceController.detail)
router.get('/', bodyPreferenceController.get)

module.exports = router
