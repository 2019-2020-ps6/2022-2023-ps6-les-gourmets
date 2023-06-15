const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const number = require('joi/lib/types/number/index.js')


module.exports = new BaseModel('Stat', {
    quiz : Joi.number().required(),
    user : Joi.number().required(),
    bonnesReponses : Joi.array().items(number).required(),
    mauvaisesReponses : Joi.array().items(number).required(),
    timerMoyen : Joi.number(),
    times : Joi.number()
    })