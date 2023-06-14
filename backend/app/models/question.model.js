const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const number = require('joi/lib/types/number/index.js')
const {AnswerSchema} = require('./answer.model.js')

module.exports = new BaseModel('Question', {
  type: Joi.string(),
  themes: Joi.array(),
  images: Joi.array(),
  label: Joi.string().required(),
  answers: Joi.array().items(AnswerSchema).required(),
  estFacile: Joi.boolean().required(),
})

