const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

// Updated Mongoose schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      // lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: 'Lagos, Nigeria',
    },
  },
  {
    timestamps: true,
  },
);

// Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
  return token;
};

// Mongoose model
const User = mongoose.model('User', userSchema);

// Joi validation schema
const schema = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(5).max(255).required(),
  location: Joi.string(),
});

module.exports = {
  User,
  validate: user => schema.validate(user),
};
