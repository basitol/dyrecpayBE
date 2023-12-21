const express = require('express');
const users = require('../routes/userRoutes');
const auth = require('../routes/authRoutes');
const products = require('../routes/productRoute');
const cart = require('../routes/cartRoutes');
const order = require('../routes/orderRoutes');

module.exports = function (app) {
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api', products);
  app.use('/api', cart);
  app.use('/api', order);
};
