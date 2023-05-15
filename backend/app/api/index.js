const { Router } = require('express')
const quizRouter = require('./quiz')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quiz', quizRouter)


module.exports = router
