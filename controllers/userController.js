const Joi = require('joi');
const generateToken = require('../utils/generateToken');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const {User} = require('../model/userModel');
const {successMsg, errorMsg} = require('../utils/response');

// @desc    Create user
// @route   POST /api/users
// @access  Public
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    // Validate request
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if user exists in the database
    let userExist = await User.findOne({email});
    console.log(userExist);
    if (!userExist) {
      return res.status(400).send('Invalid email or password.');
    }

    console.log(userExist);

    if (!userExist) return res.status(400).send('Invalid email or password.');

    // Check if provided password matches the hashed password
    let validPassword = await bcrypt
      .compare(password, userExist.password)
      .catch(err => {
        console.log(`bcrypt compare error: ${err}`);
        errorMsg(res, 'Error validating password');
      });

    if (!validPassword)
      return res.status(400).send('Invalid email or password.');

    // Generate token
    let token = await generateToken(userExist);

    // Send success response
    successMsg(
      res,
      'User logged in successfully',
      _.pick(userExist, ['_id', 'name', 'email', 'isUser']),
      200,
      token,
    );
  } catch (error) {
    errorMsg(res, error.message);
  }
};

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const {name, email, password} = req.body;

    // Validate request
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if user already exists
    let userExist = await User.findOne({email});
    if (userExist) {
      return res.status(400).send('User already registered.');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    let user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate token
    const token = generateToken(user);

    // Send success response
    successMsg(
      res,
      'User registered successfully',
      _.pick(user, ['_id', 'name', 'email']),
      200,
      token,
    );
  } catch (error) {
    errorMsg(res, error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found.');
    res.send('User deleted successfully.');
  } catch (error) {
    errorMsg(res, error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Send success response with user data
    // Using _.pick to select only the necessary user fields to return
    const userData = _.pick(user, ['_id', 'name', 'email', 'location']); // Adjust the fields as per your User model
    successMsg(res, 'User details fetched successfully', userData);
  } catch (error) {
    errorMsg(res, 'Error fetching user details', 500, error.message);
  }
};

const validate = req => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
};

module.exports = {
  loginUser,
  registerUser,
  deleteUser,
  getUser,
};
