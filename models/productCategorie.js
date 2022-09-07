const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const ProductCategorie = sequelize.define(
    'ProductCategorie',
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

  return ProductCategorie
}
