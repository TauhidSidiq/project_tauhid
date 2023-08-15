'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: {
          name: "idUser",
          allowNull: false,
        },
      });
    }
  }
  Transaction.init({
    idUser: DataTypes.INTEGER,
    trash: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    image: DataTypes.TEXT,
    points: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};