const express        = require('express')
const router         = express.Router()
const authController = require('../app/api/controllers/auth')

router.post('/login', authController.login)
router.post('/refresh', authController.refresh)
router.post('/logout', authController.logout)

module.exports = router
