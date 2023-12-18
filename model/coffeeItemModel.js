const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
  size: String,
  price: String,
  currency: String,
});

const CoffeeItemSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  roasted: String,
  imagelink_square: String, // You might store the path to the image or a URL
  imagelink_portrait: String, // Same as above
  ingredients: String,
  special_ingredient: String,
  prices: [PriceSchema],
  average_rating: Number,
  ratings_count: String,
  favourite: Boolean,
  type: String,
  index: Number,
});

const Coffee = mongoose.model('Coffee', CoffeeItemSchema);
module.exports = {Coffee};
