'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // define association here
     this.hasMany(models.Airport,{
       foreignKey:'cityId',
       onDelete:'CASCADE',
       onUpdate:'CASCADE'
     })
    }
  }
  City.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true, // Moved inside `name`
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'cities', // Ensure correct table name
      timestamps: true, // Keep timestamps
      freezeTableName: true, // Prevent automatic pluralization
    }
  );
  return City;
};