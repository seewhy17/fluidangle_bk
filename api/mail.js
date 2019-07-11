import express from 'express'
import validator from 'validator'
import xssFilters from 'xss-filters'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const rejectFunctions = new Map([
  ['firstName', v => v.length < 4],
  ['lastName', v => v.length < 4],
  ['email', v => !validator.isEmail(v)],
  ['companyName', v => v.length < 4],
  ['companyRole', v => v.length < 4],
  ['telephone', v => v.length < 1],
  ['lowEnd', v => v < 0],
  ['highEnd', v => v < 0]
])

const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}
const sendMail = async (params) => {
  const [firstName, lastName, email, telephone, companyName, companyRole, lowEnd, highEnd] = params
  const testAccount = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: process.env.mail_host || testAccount.smtp.host,
    port: process.env.mail_port || testAccount.smtp.port,
    secure: process.env.mail_secure || testAccount.smtp.secure,
    auth: {
      user: process.env.mail_user || testAccount.user, // generated ethereal user
      pass: process.env.mail_pass || testAccount.pass // generated ethereal password
    }
  })
  try {
    const info = await transporter.sendMail({
      from: email,
      to: 'garubav@gmail.com',
      subject: 'App Price Estimation',
      html: `<p>${firstName}, ${lastName}, ${email}, ${telephone}, ${companyName}, ${companyRole}, ${lowEnd}, ${highEnd}</p>`
    })
    return `Message sent: ${nodemailer.getTestMessageUrl(info) || info.messageId}`
  } catch (err) {
    return new Error(err)
  }
}

app.post('/', async (req, res, next) => {
  const attributes = ['firstName', 'lastName', 'email', 'telephone', 'companyName', 'companyRole', 'lowEnd', 'highEnd']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Unable to Complete!' })
  }
  try {
    const info = await sendMail(sanitizedAttributes)
    res.status(200).json({ 'message': `Mail Sent: ${info}` })
  } catch (err) {
    return res.status(422).json({ 'error': `Unable to Complete!: ${err}` })
  }
})
export default {
  path: '/api/mail',
  handler: app
}
