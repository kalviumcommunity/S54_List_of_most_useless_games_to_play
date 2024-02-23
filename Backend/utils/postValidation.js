const Joi = require("joi");

module.exports.postValidation = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  user: Joi.string().required(),
});