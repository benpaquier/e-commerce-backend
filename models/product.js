const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const Product = sequelize.define(
    'Product',
    {
      availableForSale: {
        type: DataTypes.BOOLEAN
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER
      },
      inventory: {
        type: DataTypes.INTEGER
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

  return Product
}
