const express = require('express');
const errorHandler = require('./utils/errorHandler');
const employeeRoutes = require('./employee');


module.exports = () => {
  const router = express.Router();

  router.use('/employee', employeeRoutes(), errorHandler);
  return router;
};