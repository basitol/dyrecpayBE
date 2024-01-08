const mongoose = require('mongoose');

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
      // Updated field name for consistency
      type: String,
      required: true,
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Order', orderSchema);
