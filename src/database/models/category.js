const sequelize = require("sequelize");

const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  return Category;
};

module.exports = Category;