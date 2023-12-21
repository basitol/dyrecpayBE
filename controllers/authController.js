// const User = require('../model/userModel');
// const {successMsg, errorMsg} = require('../utils/response');
// const bcrypt = require('bcrypt');

// const CryptoJS = require('crypto-js');
// const jwt = require('jsonwebtoken');

// module.exports = {
//   createUser: async (req, res) => {
//     const {username, email, password, location} = req.body;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       username,
//       email,
//       location,
//       password: hashedPassword,
//     });

//     try {
//       await newUser.save();

//       const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
//         expiresIn: '1h',
//       });
//       successMsg(res, 'User created successfully', newUser, 201, token);
//     } catch (error) {
//       errorMsg(res, 'Error creating user', 500, error);
//     }
//   },

//   login: async (req, res) => {
//     const {email, password} = req.body;

//     try {
//       // Find user by email
//       const user = await User.findOne({email});
//       if (!user) {
//         return errorMsg(res, 'User not found', 404);
//       }

//       // Check if password is correct
//       const validPassword = await bcrypt.compare(password, user.password);
//       if (!validPassword) {
//         return errorMsg(res, 'Invalid password', 401);
//       }

//       // Generate token
//       const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
//         expiresIn: '1h',
//       });

//       // Send success response
//       successMsg(res, 'Logged in successfully', {user: user._id}, 200, token);
//     } catch (error) {
//       errorMsg(res, 'Login error', 500, error);
//     }
//   },
// };

const {User} = require('../model/userModel');
const {successMsg, errorMsg} = require('../utils/response');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  createUser: async (req, res) => {
    const {username, email, password, location} = req.body;

    // Input validation (basic example)
    if (!email || !password) {
      return errorMsg(res, 'Email and password are required', 400);
    }

    try {
      // Check for existing user
      const existingUser = await User.findOne({email});
      if (existingUser) {
        return errorMsg(res, 'Email already in use', 409);
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        location,
        password: hashedPassword,
      });

      await newUser.save();

      const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      successMsg(res, 'User created successfully', newUser, 201, token);
    } catch (error) {
      console.error(error); // Log the error for internal use
      errorMsg(res, 'Error creating user', 500);
    }
  },

  login: async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
      return errorMsg(res, 'Email and password are required', 400);
    }

    try {
      const user = await User.findOne({email});
      if (!user) {
        return errorMsg(
          res,
          'Wrong credentials, please provide a valid email',
          404,
        );
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return errorMsg(res, 'Invalid password', 401);
      }

      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      successMsg(res, 'Logged in successfully', {user: user._id}, 200, token);
    } catch (error) {
      console.error(error); // Log the error for internal use
      errorMsg(res, 'Login error', 500);
    }
  },
};
