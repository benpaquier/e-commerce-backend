const express = require('express')
const app = express()
const { Product, Category, ProductCategorie } = require('../models')

app.get('/', async (req, res) => {
  const categoryId = req.query.category

  let whereClause = {}

  if (categoryId) {
    whereClause = { id: categoryId }
  }

  const products = await Product.findAll({
    include: [
      {
        model: Category,
        through: ProductCategorie,
        where: whereClause
      }
    ]
  })

  res.json(products)
})

app.get('/:id', async (req, res) => {
  const { id } = req.params

  const product = await Product.findOne({
    where: { id },
    include: Category
  })

  res.json(product)
})

// // to remove
// app.post('/', async (req, res) => {
//   const product = await Product.create(req.body)

//   const category = await Category.findByPk(req.body.category)
//   console.log(category)

//   product.addCategory(category, { through: ProductCategorie })
// })

module.exports = app
