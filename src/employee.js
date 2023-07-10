const express = require('express');
const asyncHandler = require('./utils/asyncHandler');
const {
  getEmployeesList,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('./helpers/employeeHelpers');
const validationMiddleware = require('./utils/validationMiddleware');
const validationSchemas = require('./utils/validationSchemas');

module.exports = () => {
  const router = express.Router({});

  router.get('/list', asyncHandler(async (req, res) => {
    const response = await getEmployeesList(req.query);
    res.json(response);
  }));

  router.post('/create', validationMiddleware(validationSchemas.createEmployee), asyncHandler(async (req, res) => {
    const response = await createEmployee(req.body);
    res.json(response);
  }));

  router.put('/update', validationMiddleware(validationSchemas.updateEmployee), asyncHandler(async (req, res) => {
    const response = await updateEmployee(req.body);
    res.json(response);
  }));

  router.delete('/delete', validationMiddleware(validationSchemas.deleteEmployee), asyncHandler(async (req, res) => {
    const response = await deleteEmployee(req.body);
    res.json(response);
  }));

  return router
};
