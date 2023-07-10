const Joi = require('joi')
const schemas = {
  createEmployee: Joi.object().keys({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    country: Joi.string().optional(),
    profilePicture: Joi.string().optional(),
  }),
  updateEmployee: Joi.object().keys({
    id: Joi.number().required(),
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    country: Joi.string().optional(),
    profilePicture: Joi.string().optional(),
  }),
  deleteEmployee: Joi.object().keys({
    id: Joi.number().required(),
  })
};
module.exports = schemas;