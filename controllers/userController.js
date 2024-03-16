const Joi = require('joi');
const generateToken = require('../utils/generateToken');
const User = require('../model/userModel');
const {successMsg, errorMsg} = require('../utils/response');

const validateUser = user => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    device: Joi.string().required().valid('android', 'ios'),
    CryptoCashConversionFrequency: Joi.string()
      .required()
      .valid('daily', 'weekly', 'monthly', 'rarely'),
    TopTradedCurrency: Joi.string()
      .required()
      .valid('btc', 'eth', 'xrp', 'ltc', 'other'),
  });

  return schema.validate(user);
};

const joinWaitlist = async (req, res) => {
  try {
    const {error} = validateUser(req.body);
    if (error) {
      const errorMessage = error.details
        .map(detail => detail.message)
        .join(', ');
      return res.status(400).send(errorMessage);
    }

    let userExists = await User.findOne({email: req.body.email});
    if (userExists) {
      return res
        .status(400)
        .send('This email is already registered on the waitlist.');
    }

    const user = new User(req.body);
    await user.save();

    const token = generateToken(user);

    successMsg(res, 'Successfully joined the waitlist!', {token}, 201);
  } catch (error) {
    console.error('Error joining waitlist:', error);
    errorMsg(
      res,
      'An unexpected error occurred while processing your request.',
      500,
      error.message,
    );
  }
};

const getAllUsersOnWaitlist = async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users
    if (!users || users.length === 0) {
      return res.status(404).send('No users found on the waitlist.');
    }

    const filteredUsers = users.map(user => ({
      email: user.email,
      device: user.device,
      CryptoCashConversionFrequency: user.CryptoCashConversionFrequency,
      TopTradedCurrency: user.TopTradedCurrency,
    }));

    successMsg(
      res,
      'Waitlist users retrieved successfully',
      filteredUsers,
      200,
    );
  } catch (error) {
    console.error('Error retrieving waitlist users:', error);
    errorMsg(
      res,
      'An unexpected error occurred while trying to fetch waitlist users.',
      500,
      error.message,
    );
  }
};

module.exports = {joinWaitlist, getAllUsersOnWaitlist};
