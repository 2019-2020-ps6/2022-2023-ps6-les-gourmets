const { Router } = require('express')
const quizRouter = require('./quizzes')
const userRouter = require('./users')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', quizRouter)
router.use('/users', userRouter)


module.exports = router
