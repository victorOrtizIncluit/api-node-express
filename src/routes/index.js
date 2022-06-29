const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index')

router.get('/', indexController.products.get); 
router.get('/products', indexController.products.post); 

module.exports = router;