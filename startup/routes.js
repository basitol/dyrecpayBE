const express = require('express');
const users = require('../routes/userRoutes');
const products = require('../routes/productRoute');

module.exports = function (app) {
  app.use('/api/users', users);
  app.use('/api', products);
};
