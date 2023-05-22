const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const number = require('joi/lib/types/number/index.js')

module.exports = new BaseModel('Question', {
  type: Joi.string(),
  theme: Joi.string(),
  images: Joi.array(),
  label: Joi.string().required(),
  answers: Joi.array().items(number).required(),
  trueAnswer: Joi.number().required(),
  falseAnswer: Joi.number().required(),
  estFacile: Joi.boolean().required(),
})

