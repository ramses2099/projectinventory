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
  };
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_role: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
      sequelize,
      modelName: 'User',
      tablaName:'Users'
    });
  return User;
};