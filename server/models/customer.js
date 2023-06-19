'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require('../helpers/bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Article, { through: models.Bookmark });
    }
  }
  Customer.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Email has been registered!'},
      validate: {
        notNull: {msg: 'Email is required!'},
        notEmpty: {msg: 'Email is required!'},
        isEmail: {msg: 'Invalid email format!'}
    }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Password is required!'},
        notEmpty: {msg: 'Password is required!'}
    }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.beforeCreate((customer, options) => {
    customer.password = hashPassword(customer.password)
  })

  return Customer;
};