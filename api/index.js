import express from 'express'
import validator from 'validator'
import xssFilters from 'xss-filters'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import Mailchimp from 'mailchimp-api-v3'
import mailTemplate from './mailTemplate'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const listUniqueId = process.env.MAILING_LIST_ID
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
const mailchimp = new Mailchimp(mailchimpApiKey)

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
const sendMail = async (params, features) => {
  const email = params[2]
  const testAccount = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: `${process.env.mail_host}` || testAccount.smtp.host,
    port: process.env.mail_port || testAccount.smtp.port,
    secure: (process.env.mail_secure === 'true') || testAccount.smtp.secure,
    auth: {
      user: `${process.env.mail_user}` || testAccount.user, // generated ethereal user
      pass: `${process.env.mail_pass}` || testAccount.pass // generated ethereal password
    }
  })
  try {
    const info = await transporter.sendMail({
      from: process.env.mail_user,
      to: `${email}`,
      bcc: `terrykrangar@fluidangle.com, abdulsamii@fluidangle.com, garubav@gmail.com`,
      subject: 'App Price Estimation',
      html: mailTemplate(params, features, process.env.BASE_URL)
    })
    return `Message sent: ${nodemailer.getTestMessageUrl(info) || info.messageId}`
  } catch (err) {
    return new Error(err)
  }
}
const subscribe = async (params) => {
  const update = true
  const status = {
    subscribed: 'subscribed',
    unsubscribed: 'unsubscribed',
    pending: 'pending',
    cleaned: 'cleaned'
  }
  const [firstName, lastName, email, telephone, companyName, companyRole, lowEnd, highEnd] = params
  try {
    return await mailchimp.post(`/lists/${listUniqueId}`, {
      update_existing: update !== undefined ? update : true,
      members: [{
        email_address: email.toLowerCase(),
        status: status.subscribed || 'subscribed',
        merge_fields: {
          'FNAME': firstName,
          'LNAME': lastName,
          'PHONE': telephone,
          'CMPANYNAME': companyName,
          'CMPANYROLE': companyRole,
          'LOWEND': lowEnd,
          'HIGHEND': highEnd
        }
      }]
    })
  } catch (err) {
    return new Error(err)
  }
}

app.post('/subscribe/', async (req, res, next) => {
  const update = true
  const status = {
    subscribed: 'subscribed',
    unsubscribed: 'unsubscribed',
    pending: 'pending',
    cleaned: 'cleaned'
  }
  const { firstName, lastName, email, telephone, companyName, companyRole, lowEnd, highEnd } = req.body
  try {
    const results = await mailchimp.post(`/lists/${listUniqueId}`, {
      update_existing: update !== undefined ? update : true,
      members: [{
        email_address: email.toLowerCase(),
        status: status.subscribed || 'subscribed',
        merge_fields: {
          'FNAME': firstName,
          'LNAME': lastName,
          'PHONE': telephone,
          'CMPANYNAME': companyName,
          'CMPANYROLE': companyRole,
          'LOWEND': lowEnd,
          'HIGHEND': highEnd
        }
      }]
    })
    res.status(200).json(results)
  } catch (err) {
    res.status(200).json(err)
  }
})

app.post('/mail/', async (req, res, next) => {
  const attributes = ['firstName', 'lastName', 'email', 'telephone', 'companyName', 'companyRole', 'lowEnd', 'highEnd']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  const someInvalid = sanitizedAttributes.some(r => !r)
  const features = req.body.features || {}
  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Unable to Complete!' })
  }
  try {
    const info = await sendMail(sanitizedAttributes, features)
    await subscribe(sanitizedAttributes)
    res.status(200).json({ 'message': `Mail Sent: ${info}` })
  } catch (err) {
    return res.status(422).json({ 'error': `Unable to Complete!: ${err}` })
  }
})

app.get('/test/', (req, res, next) => res.status(200).json('test'))

export default {
  path: '/api/',
  handler: app
}
