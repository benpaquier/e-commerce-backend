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

const Product = require('./Product')(sequelize)
const Category = require('./Category')(sequelize)
const Order = require('./Order')(sequelize)

Product.hasMany(Category)
Category.belongsToMany(Product, { through: 'products_categories' })

Order.hasMany(Product)
Product.belongsToMany(Order, { through: 'products_orders' })

sequelize.sync({ alter: true })

connectDb()

module.export = {
  sequelize,
  Product,
  Category,
  Order
}
