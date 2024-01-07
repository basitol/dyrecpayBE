const express = require('express');
const cors = require('cors');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
  res.send('Welcome to the DecorDash server');
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // amount in cents
      currency: 'usd',
      // additional parameters can be added here
    });
    res.send({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
