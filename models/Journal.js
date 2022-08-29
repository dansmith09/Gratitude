const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    gratitude_entry_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gratitude_entry_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gratitude_entry_3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    journal_entry: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'journal',
  }
);

module.exports = Journal;