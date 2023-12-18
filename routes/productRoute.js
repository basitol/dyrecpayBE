const router = require('express').Router();
const productController = require('../controllers/productController');

// Route to create a new product
router.post('/products', productController.createProduct);

// Route to get all products
router.get('/products', productController.getAllProduct);

// Route to get a single product by ID
router.get('/products/:id', productController.getProduct);

// Route to search products
router.get('/products/search/:key', productController.searchProduct);

module.exports = router;
