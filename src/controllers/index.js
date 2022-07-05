const services = require("../services");
const products = require("./products/index")(services);
const user = require("./users/index")(services);

module.exports = {
  products,
  user,
};
