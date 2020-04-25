const Joi = require("@hapi/joi");

module.exports.validateLogin = (data) => {
  let schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  });

  return schema.validate(data);
};

module.exports.validateRegister = (data) => {
  let schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
    name: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};
