const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Adjust the path as necessary

// Create a new order
router.post('/orders', orderController.createOrder);

// Get order by ID
router.get('/orders/:orderId', orderController.getOrderById);

// Update order status
router.put('/orders/:orderId', orderController.updateOrderStatus);

router.get('/orders/user/:userId', orderController.getOrdersByUserId);

module.exports = router;
