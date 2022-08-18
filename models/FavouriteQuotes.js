const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FavouriteQuotes extends Model {}

FavouriteQuotes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    quote_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quotes',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favourite_quotes',
  }
);

module.exports = FavouriteQuotes;