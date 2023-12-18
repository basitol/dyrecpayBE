const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize the Express application
const app = express();

// Use cors middleware for handling CORS (Cross-Origin Resource Sharing) requests
app.use(cors());
app.use(express.json({limit: '10mb'}));

// Use built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({limit: '10mb', extended: true}));

// Include your routes and database initializations
require('./startup/routes')(app);
require('./startup/db')();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Wicartit server');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
