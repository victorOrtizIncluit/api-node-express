const services = require('../services');
const products = require('./products/index')(services);

module.exports = {
    products
};
