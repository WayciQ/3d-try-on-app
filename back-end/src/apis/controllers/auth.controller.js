const httpStatus = require('http-status')

const catchAsync = require('../../utils/catch-async')
const { tokenService, userService, authService } = require('../services')

const login = catchAsync(async (req, res) => {
    const { user } = req
    const token = await tokenService.generateToken(user)
    res.setHeader('Authorization', `Bearer ${token}`)
    res.status(httpStatus.OK).send({ user })
})

const register = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body)
    const token = await tokenService.generateToken(user)
    res.setHeader('Authorization', `Bearer ${token}`)
    res.status(httpStatus.CREATED).send({ user })
})

const sendVerificationEmail = catchAsync(async (req, res) => {
    const { email } = req.user
    const verifyEmailToken = await tokenService.generateVerifyEmailToken(email)
    await authService.sendVerificationEmail(verifyEmailToken, email)
    res.status(httpStatus.OK).send({
        message: 'Send email verification',
    })
})

const activateEmailToken = catchAsync(async (req, res) => {
    const { token } = req.body
    await authService.activateEmailToken(token)
    res.status(httpStatus.OK).send({
        message: 'Your token has been activated',
    })
})

module.exports = {
    login,
    register,
    sendVerificationEmail,
    activateEmailToken,
}
