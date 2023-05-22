const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const number = require('joi/lib/types/number/index.js')
const string = require('joi/lib/types/string/index.js')

module.exports = new BaseModel('User', {
    name: Joi.string().required(),
    surname : Joi.string().required(),
    aggressivness : Joi.number().required(),
    answerDisplay: Joi.boolean().required(),
    quizzes : Joi.array().items(number).required(),
    music : Joi.array().items(string).required(),
    passivity : Joi.number().required(),
})