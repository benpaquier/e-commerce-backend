const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const ProductOrder = sequelize.define(
    'ProductOrder',
    {
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

  return ProductOrder
}
