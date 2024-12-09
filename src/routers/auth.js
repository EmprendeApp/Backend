const { Router } = require('express')
const router = Router()
const authController = require('../controller/authController')

router.post('/auth/register', authController.register)
router.post('/auth/autentication', authController.login)

module.exports = router