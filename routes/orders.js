const express = require('express')
const app = express()
const { Product, Order, ProductOrder } = require('../models')

app.get('/:id', async (req, res) => {
  const { id } = req.params

  const order = await Order.findOne({
    where: { id },
    include: Product
  })

  res.json(order)
})

// // to remove
app.post('/', async (req, res) => {
  let order = await Order.create(req.body)

  const products = await Product.findAll()
  order.setProducts(products)
  await order.save()

  res.json(order)
})

module.exports = app
