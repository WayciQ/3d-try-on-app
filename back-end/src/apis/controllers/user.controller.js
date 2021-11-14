const catchAsync = require('../../utils/catch-async')
const userService = require('../services/user.service')
const httpStatus = require('http-status')

const getUsers = catchAsync(async (req, res, next) => {
    const users = await userService.getUsers()
    res.status(httpStatus.OK).send({ users: users })
})

const createUser = catchAsync(async (req, res, next) => {
    const user = await userService.createUser(req.body)
    res.status(httpStatus.CREATED).send({ user })
})

const updateUser = catchAsync(async (req, res, next) => {
    const newUser = await userService.updateUser(req.params.userID, req.body)
    res.status(httpStatus.OK).send({ newUser })
})

const deleteUser = catchAsync(async (req, res, next) => {
    const deletedUser = await userService.deleteUser(req.params.userID)
    res.status(httpStatus.OK).send({ deletedUser })
})
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}
