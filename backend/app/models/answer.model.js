const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')


const Answer = new BaseModel('Answer', {
    type: Joi.string(),
    value: Joi.string().required(),
    isCorrect: Joi.boolean().required(),
    })

const AnswerSchema = {
    type: Joi.string(),
    value: Joi.string().required(),
    isCorrect: Joi.boolean().required(),
    }


module.exports = {
    Answer, AnswerSchema
}
