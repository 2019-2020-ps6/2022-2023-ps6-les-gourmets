const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

const AnswerSchema = {
    type: Joi.string(),
    value: Joi.string().required(),
    isCorrect: Joi.boolean().required(),
    };

const Answer = new BaseModel('Answer', AnswerSchema)

module.exports = {
    AnswerSchema,
    Answer,
}
