const express = require('express')

const authRoute = require('./v1/auth.route')
const userRoute = require('./v1/user.route')
const addressRoute = require('./v1/address.route')

const router = express.Router()

router.use('/v1/auth', authRoute)
router.use('/v1/users', userRoute)
router.use('/v1/address', addressRoute)

module.exports = router
