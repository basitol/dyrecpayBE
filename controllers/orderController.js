const Order = require('../model/orderModel'); // Adjust the path as necessary
const Cart = require('../model/cartModel'); // Adjust the path as necessary
const {successMsg, errorMsg} = require('../utils/response');

const orderController = {
  // Create a new order
  // Example backend code (in your order routes/controller)
  createOrder: async (req, res) => {
    try {
      const {userId, address, city, postalCode, country, subTotal, total} =
        req.body;

      // Validation
      if (
        !userId ||
        !address ||
        !city ||
        !postalCode ||
        !country ||
        !subTotal ||
        !total
      ) {
        return errorMsg(res, 'Missing required fields', 400);
      }

      // Fetch the user's cart
      const cart = await Cart.findOne({userId});
      if (!cart || cart.products.length === 0) {
        return errorMsg(res, 'Cart is empty or not found', 404);
      }

      // Transform cart items to match Order model structure
      const orderItems = cart.products.map(item => ({
        product: item.cartItem, // Use the cartItem field as the product
        quantity: item.quantity,
      }));

      // Create the order with transformed cart items
      const newOrder = new Order({
        userId,
        address,
        city,
        postalCode,
        country,
        subTotal,
        total,
        payment_status: 'pending',
        items: orderItems,
      });

      await newOrder.save();

      // Optional: Clear the user's cart after creating the order
      await Cart.findOneAndUpdate({userId}, {$set: {products: []}});

      successMsg(res, 'Order created successfully', newOrder, 201);
    } catch (error) {
      errorMsg(res, 'Error creating order', 500, error.message);
    }
  },

  // Get order by ID
  getOrderById: async (req, res) => {
    const {orderId} = req.params;

    try {
      const order = await Order.findById(orderId).populate('productId');
      if (!order) {
        return errorMsg(res, 'Order not found', 404);
      }
      successMsg(res, 'Order fetched successfully', order);
    } catch (error) {
      errorMsg(res, 'Error fetching order', 500, error.message);
    }
  },

  // getOrdersByUserId: async (req, res) => {
  //   const {userId} = req.params;

  //   console.log(`Fetching orders for user ID: ${userId}`); // Log the user ID

  //   try {
  //     // Automatically converts string to ObjectId
  //     const orders = await Order.find({userId}).populate('items.product'); // Adjust the populate method according to your schema

  //     if (!orders.length) {
  //       return res
  //         .status(404)
  //         .json({status: false, message: 'Order not found'});
  //     }

  //     return res.status(200).json({
  //       status: true,
  //       message: 'Orders fetched successfully',
  //       data: orders,
  //     });
  //   } catch (error) {
  //     console.error('Error fetching orders:', error);
  //     return res.status(500).json({
  //       status: false,
  //       message: 'Error fetching orders',
  //       error: error.message,
  //     });
  //   }
  // },

  getOrdersByUserId: async (req, res) => {
    const {userId} = req.params;

    console.log(`Fetching orders for user ID: ${userId}`);

    try {
      const orders = await Order.find({userId}).populate('items.product');

      console.log(`Orders found: ${orders.length}`);

      if (!orders.length) {
        return res
          .status(404)
          .json({status: false, message: 'No orders found for this user'});
      }

      return res.status(200).json({
        status: true,
        message: 'Orders fetched successfully',
        data: orders,
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      return res.status(500).json({
        status: false,
        message: 'Error fetching orders',
        error: error.message,
      });
    }
  },

  // Update order to paid
  updateOrderToPaid: async (req, res) => {
    const {orderId} = req.params;

    try {
      const order = await Order.findById(orderId);
      if (!order) {
        return errorMsg(res, 'Order not found', 404);
      }

      // Set the payment status to 'paid'
      order.paymentStatus = 'paid';
      await order.save();

      successMsg(res, 'Order updated to paid successfully', order);
    } catch (error) {
      errorMsg(res, 'Error updating order to paid', 500, error.message);
    }
  },

  // Update delivery status (Admin only)
  updateDeliveryStatus: async (req, res) => {
    const {orderId} = req.params;
    const {delivery_status} = req.body;

    // Add your admin verification logic here
    // if (!req.user.isAdmin) {
    //   return errorMsg(res, 'Unauthorized', 401);
    // }

    try {
      const order = await Order.findById(orderId);
      if (!order) {
        return errorMsg(res, 'Order not found', 404);
      }

      order.delivery_status = delivery_status;
      await order.save();

      successMsg(res, 'Delivery status updated successfully', order);
    } catch (error) {
      errorMsg(res, 'Error updating delivery status', 500, error.message);
    }
  },
};

module.exports = orderController;
