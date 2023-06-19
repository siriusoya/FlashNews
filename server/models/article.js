'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User, {
        foreignKey: 'authorId'
      })
      Article.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      })
      Article.belongsToMany(models.Customer, { through: models.Bookmark });
    }
  }
  Article.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Title is required!'},
        notEmpty: {msg: 'Title is required!'}
    }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {msg: 'Content is required!'},
        notEmpty: {msg: 'Content is required!'}
    }
    },
    imgUrl: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });

  return Article;
};