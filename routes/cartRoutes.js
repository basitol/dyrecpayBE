const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); // Adjust the path as necessary

// Add item to cart
router.post('/cart/add', cartController.addItemToCart);

// Get user's cart
router.get('/cart/:userId', cartController.getCart);

// Remove item from cart
router.post('/cart/remove', cartController.removeItemFromCart);

// Delete user's cart
router.delete('/cart/:userId', cartController.deleteCart);

module.exports = router;
