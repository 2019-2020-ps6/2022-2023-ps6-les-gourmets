const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const { AnswerSchema } = require('./answer.model.js')

module.exports = new BaseModel('Question', {
  type: Joi.string(),
  images: Joi.array(),
  label: Joi.string().required(),
  answers: Joi.array().items(AnswerSchema).required(),
  trueAnswer: Joi.number().required(),
  falseAnswer: Joi.number().required(),
  estFacile: Joi.boolean().required(),
})