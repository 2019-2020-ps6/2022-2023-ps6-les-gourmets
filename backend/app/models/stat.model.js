const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const number = require('joi/lib/types/number/index.js')


module.exports = new BaseModel('Stat', {
    quiz : Joi.number().required(),
    score : Joi.array().items(number).required(),
    time : Joi.number()
    })

const StatSchema = {
    quiz : Joi.number().required(),
    score : Joi.array().items(number).required(),
    time : Joi.number()

}