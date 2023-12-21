const express = require('express');
const router = express.Router();
const {
  loginUser,
  registerUser,
  deleteUser,
  getUser,
} = require('../controllers/userController');

// Route for user login
router.post('/login', loginUser);

// Route for user registration
router.post('/register', registerUser);

// Route for getting user details
router.get('/:id', getUser);

// Route for deleting a user
// This route is typically private and requires authentication
router.delete('/:id', deleteUser);

module.exports = router;
