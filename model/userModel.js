const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    device: {
      type: String,
      required: true,
      enum: ['android', 'ios'],
    },
    CryptoCashConversionFrequency: {
      type: String,
      required: true,
      enum: ['daily', 'weekly', 'monthly', 'rarely'],
    },
    TopTradedCurrency: {
      type: String,
      required: true,
      enum: ['btc', 'eth', 'xrp', 'ltc', 'other'],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
