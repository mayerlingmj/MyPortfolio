const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.post('/api/contact', (req, res) => {
  const { email, message } = req.body

  console.log('Received a POST request to /api/contact')
  console.log('Request body:', req.body)

  // For simplicity, we'll just send a success response
  console.log(
    `Received contact form submission: Email: ${email}, Message: ${message}`
  )

  res.status(200).json({ message: 'Message received successfully!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
