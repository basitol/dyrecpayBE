const mongoose = require('mongoose');

// Assuming the Product model exists and is structured appropriately
const productItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product', // Reference to the Product model
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Assuming it references a User document
      required: true,
      ref: 'User',
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
      default: 'pending',
    },
    delivery_status: {
      type: String,
      required: true,
      default: 'pending',
      enum: ['pending', 'shipped', 'delivered', 'cancelled'], // example statuses
    },
    items: [productItemSchema],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Order', orderSchema);
