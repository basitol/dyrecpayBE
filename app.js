const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({limit: '10mb'}));

app.use(express.json());
app.use(express.urlencoded({limit: '10mb', extended: true}));

require('./startup/routes')(app);
require('./startup/db')();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the DyrectPay server');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
