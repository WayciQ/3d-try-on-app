const httpStatus = require('http-status')
const sgMail = require('@sendgrid/mail')
const jwt = require('jsonwebtoken')

const tokenService = require('./token.service')
const userService = require('./user.service')

const CustomError = require('../../utils/custom-error')
const env = require('../../configs/env')

const sendVerificationEmail = async (verifyEmailToken, email) => {
    console.log(env.app.schema)
    const emailData = {
        from: '19522038@gm.uit.edu.vn', //must use only this email which is registered with account in website Sendgrid cuz this account owns MAIL_KEY
        to: email,
        subject: 'Account activation link',
        html: `
                <h1>Please use the following to activate your account</h1>
                <p>${process.env.CLIENT_URL}/api/v1/auth/activate/${verifyEmailToken}</p>
                <form action="${env.app.schema}://${env.app.host}:${env.app.port}${env.app.routePrefix}/v1/auth/activate" method="POST">
                    <input
                        type="submit"
                        name="token"
                        value="${verifyEmailToken}"
                    />
                </form>
                  <hr />
                  <p>This email may contain sensitive information</p>
                  <p>${process.env.CLIENT_URL}</p>
              `,
    }
    sgMail.setApiKey(process.env.MAIL_KEY) // MAIL_KEY in .env
    return sgMail.send(emailData).catch((err) => {
        throw new CustomError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
    })
}

const activateEmailToken = async (verifyEmailToken) => {
    try {
        jwt.verify(verifyEmailToken, process.env.PASSPORT_JWT_ACCOUNT_ACTIVATION)
        const { email } = jwt.decode(verifyEmailToken)
        const user = await userService.getUserByEmail(email)
        user.isVerifyEmail = true
        user.save()
    } catch (err) {
        throw new CustomError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
    }
}
/**
 * Logout
 * @param {string} refreshToken
 * @returns {Promise<boolean>}
 */
const logout = async (refreshToken) => {
    const refreshTokenDoc = await tokenService.getTokenByRefresh(refreshToken, false)
    if (!refreshTokenDoc) {
        throw new CustomError(httpStatus.NOT_FOUND, 'Not found')
    }
    await refreshTokenDoc.remove()
    return true
}

module.exports = {
    sendVerificationEmail,
    activateEmailToken,
    logout,
}
