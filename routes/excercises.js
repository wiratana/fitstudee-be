const express = require('express')
const router  = express.Router()
const isAuth  = require('../app/api/middlewares/isAuth')
const excerciseController = require('../app/api/controllers/excercises')

router.post('/', isAuth, excerciseController.create)
router.get('/:id', excerciseController.get)

module.exports = router
