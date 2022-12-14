const { Sequelize } = require('sequelize')

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false
})

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connected to db')
  } catch (e) {
    console.log(e)
  }
}

const Product = require('./product')(sequelize)
const Category = require('./category')(sequelize)
const Order = require('./order')(sequelize)
const ProductCategorie = require('./productCategorie')(sequelize)
const ProductOrder = require('./productOrder')(sequelize)

Product.belongsToMany(Category, { through: ProductCategorie })
Category.belongsToMany(Product, { through: ProductCategorie })

Order.belongsToMany(Product, { through: ProductOrder })
Product.belongsToMany(Order, { through: ProductOrder })

// sequelize.sync({ alter: true })

connectDb()

module.exports = {
  sequelize,
  Product,
  Category,
  Order,
  ProductCategorie,
  ProductOrder
}
