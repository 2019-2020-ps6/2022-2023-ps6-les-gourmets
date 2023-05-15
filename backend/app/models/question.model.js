const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  type: Joi.string(),
  images: Joi.array(),
  label: Joi.string().required(),
  answers: Joi.array().required(),
  trueAnswer: Joi.number().required(),
  falseAnswer: Joi.number().required(),
  estFacile: Joi.boolean().required(),
})

module.exports = new BaseModel('Answer', {
    type: Joi.string(),
    value: Joi.string().required(),
    isCorrect: Joi.boolean().required(),
    })
