const express = require('express')
const connection = require('./config/connection')
const path = require('path')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000

//Connect Database
connection()

//Init Middleware

app.use(express.json({ extended: false, limit: '50mb' }))
app.use(cors())
app.use(express.urlencoded({ limit: '50mb' }))

//Define Routes
app.use('/api/contact', require('./routes/contactRoute'))

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder

  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
