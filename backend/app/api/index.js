const { Router } = require('express')
const quizRouter = require('./quizzes')
const userRouter = require('./users')
const questionRouter = require('./questions')
const answerRouter = require('./answers')
const statRouter = require('./stats')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', quizRouter)
router.use('/users', userRouter)
router.use('/questions', questionRouter)
router.use('/answers', answerRouter)
router.use('/stats', statRouter)


module.exports = router
