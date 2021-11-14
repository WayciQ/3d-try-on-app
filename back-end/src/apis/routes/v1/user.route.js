const express = require('express')
const { passport } = require('../../plugins/passport')
const { checkRole } = require('../../../middlewares/check-role')
const { userController } = require('../../controllers')
const { userValidation } = require('../../validations')
const validate = require('../../../middlewares/validate')

const router = express.Router()

router.get('/', passport.authenticate('jwt', { session: false }), checkRole('ADMIN'), userController.getUsers)
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN'),
    validate(userValidation.createUserSchema),
    userController.createUser
)
router.put('/:userID', userController.updateUser) //Not complete yet, incomplete validation, service update User
router.delete(
    '/:userID',
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN'),
    validate(userValidation.deleteUserSchema),
    userController.deleteUser
)

module.exports = router

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User description
 */

/**
 * @swagger
 * /v1/users:
 *   post:
 *     summary: Register as user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - displayName
 *               - email
 *               - password
 *             properties:
 *               displayName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 6
 *                 description: At least one number and one letter
 *             example:
 *               displayName: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 tokens:
 *                   $ref: '#/components/schemas/AuthTokens'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 */
