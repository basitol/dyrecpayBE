const jwt = require('jsonwebtoken');

const generateToken = user => {
  try {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET || 'somethingsecret',
      {
        expiresIn: '30d',
      },
    );
  } catch (error) {
    throw new Error(`generateToken error: ${error}`);
  }
};

module.exports = generateToken;
