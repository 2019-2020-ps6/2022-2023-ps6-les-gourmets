const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const number = require('joi/lib/types/number/index.js')

module.exports = new BaseModel('Quiz', {
    name: Joi.string().required(),
    questions: Joi.array().items(number).required(),
    easyQuestions: Joi.array().items(number).required(),
    })