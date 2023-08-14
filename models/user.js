'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    idUser: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    points: {
     type: DataTypes.DOUBLE,
     defaultValue: 0,
    },
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};