require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

require('./models')

const productsRoutes = require('./routes/products')
const categoriesRoutes = require('./routes/categories')

app.use(express.json())
app.use(cors(process.env.FRONTEND_URL))

if (process.env.ENV === 'local') {
  app.use(morgan('tiny'))
}

app.use('/products', productsRoutes)
app.use('/categories', categoriesRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
