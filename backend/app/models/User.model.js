const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
    name: Joi.string().required(),
    surname : Joi.string().required(),
    aggressivness : Joi.number().required(),
    answerDisplay: Joi.boolean().required(),
    quizzes : Joi.array().required(),
    music : Joi.array().required(),
    passivity : Joi.number().required(),
})