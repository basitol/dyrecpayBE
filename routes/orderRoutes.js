const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Adjust the path as necessary

// Create a new order
router.post('/orders', orderController.createOrder);

// Get order by ID
router.get('/orders/:orderId', orderController.getOrderById);

// Update order status to paid
router.put('/orders/:orderId/paid', orderController.updateOrderToPaid); // New route for updating order to paid

// Update delivery status (Admin only)
router.put('/orders/:orderId/delivery', orderController.updateDeliveryStatus); // New route for admin to update delivery status

router.get('/orders/user/:userId', orderController.getOrdersByUserId);

module.exports = router;
