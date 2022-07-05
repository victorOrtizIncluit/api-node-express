"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
      imageUrl: {
        type: DataTypes.STRING,
        field: "image_url",
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products"
    }
  );

  return Product;
};
