const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const Order = sequelize.define(
    'Order',
    {
      totalPrice: {
        type: DataTypes.INTEGER
      },
      customer_email: {
        type: DataTypes.STRING
      },
      customer_phone: {
        type: DataTypes.STRING,
        defaultValue: '0655443322'
      },
      customer_address: {
        type: DataTypes.STRING,
        defaultValue: '15 rue de la Réunion'
      },
      customer_zipcode: {
        type: DataTypes.STRING,
        defaultValue: '75020'
      },
      customer_city: {
        type: DataTypes.STRING,
        defaultValue: 'Paris'
      },
      customer_country: {
        type: DataTypes.STRING,
        defaultValue: 'France'
      },
      delivery_date: {
        type: DataTypes.DATE,
        defaultValue: '2023-01-31 12:45:34'
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'En préparation'
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      }
    },
    {
      timestamps: false,
      underscored: true
    }
  )

  return Order
}
