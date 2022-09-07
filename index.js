require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json('e-commerce api')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
