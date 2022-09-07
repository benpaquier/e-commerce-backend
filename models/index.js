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

connectDb()

module.export = {
  sequelize
}
