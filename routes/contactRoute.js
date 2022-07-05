const express = require('express')
const router = express.Router()
require('dotenv').config()

const { check, validationResult } = require('express-validator')

const Contact = require('../schema/contactSchema')

//@route    POST api/send
//@access   Public
router.post(
  '/',
  [
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('message', 'Please enter a valid message')
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, message } = req.body
    try {
      const contact = new Contact({
        name,
        email,
        message
      })

      await contact.save()

      res.status(200).send('Message sent successfully')
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
