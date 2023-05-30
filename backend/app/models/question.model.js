const {answerSchema} = require('./answer.model.js')

const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const number = require('joi/lib/types/number/index.js')

const Question = new BaseModel('Question', {
  type: Joi.string(),
  themes: Joi.array(),
  images: Joi.array(),
  label: Joi.string().required(),
  answers: Joi.array().items(answerSchema).required(),
  trueAnswer: Joi.number().required(),
  falseAnswer: Joi.number().required(),
  estFacile: Joi.boolean().required(),
})



module.exports = {
  Question
  

}
