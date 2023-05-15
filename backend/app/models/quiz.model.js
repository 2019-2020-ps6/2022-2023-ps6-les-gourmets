const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
    name: Joi.string().required(),
    questions: Joi.array().required(),
    easyQuestions: Joi.array().required(),
    timerMoyen: Joi.number().required(),
    times: Joi.number().required(),
    })