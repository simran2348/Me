const express = require('express')
const router = express.Router()
require('dotenv').config()

const { check, validationResult } = require('express-validator')

const Contact = require('../schema/contactSchema')

//@route    GET api/contact
//@access   Public
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 })

    res.json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//@route    POST api/contacts/send
//@access   Public
router.post(
  '/send',
  [
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('message', 'Please enter a valid message').not().isEmpty()
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

//@route    PUT api/contacts/update/:id
//@access   Public
router.put('/update/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)

    contact.read = true

    await contact.save()

    res.status(200).send('Message marked as read')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
