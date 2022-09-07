const express = require('express')
const app = express()
const { Product, Category } = require('../models')

app.get('/', async (req, res) => {
  const categories = await Category.findAll()

  res.json(categories)
})

app.get('/:id', async (req, res) => {
  const { id } = req.params

  const categorie = await Category.findOne({
    where: { id },
    include: Product
  })

  res.json(categorie)
})

module.exports = app
