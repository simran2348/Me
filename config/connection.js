const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.REACT_APP_MONGODB_URL

const connection = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected...')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connection
