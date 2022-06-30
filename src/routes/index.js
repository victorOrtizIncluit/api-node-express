const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index')

router.get('/', indexController.products.getAll); 
router.post('/products', indexController.products.create); 
router.put('/products', indexController.products.update); 
router.delete('/products', indexController.products.delete); 

module.exports = router;