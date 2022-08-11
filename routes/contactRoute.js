const express = require("express");
const router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");

const { check, validationResult } = require("express-validator");

const Contact = require("../schema/contactSchema");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

//@route    GET api/contact
//@access   Public
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });

    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST api/contacts/send
//@access   Public
router.post(
  "/send",
  [
    check("name", "Please enter your name").not().isEmpty(),
    check("email", "Please add a valid email").isEmail(),
    check("message", "Please enter a valid message").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    try {
      const contact = new Contact({
        name,
        email,
        message,
      });

      let mailOptions = {
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        text: `Email: ${email}, Message: ${message}`,
      };

      transporter.sendMail(mailOptions, async function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          await contact.save();

          res.status(200).send("Message sent successfully");
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    PUT api/contacts/update/:id
//@access   Public
router.put("/update/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    contact.read = true;

    await contact.save();

    res.status(200).send("Message marked as read");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
