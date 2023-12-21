const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Adjust the path as necessary

// Route for user registration
router.post('/register', authController.createUser);

// Route for user login
router.post('/login', authController.login);

module.exports = router;
