const { Router } = require('express')
const { Quiz } = require('../../models')
const { buildQuizz, buildQuizzes } = require('./manager')
const QuestionsRouter = require('../questions')

const router = new Router();

router.use('/:quizId/questions', QuestionsRouter)

router.get('/', (req, res) => {
    try {
      const quizzes = buildQuizzes()
      res.status(200).json(quizzes)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})  
    }
  })
  
  router.get('/:quizId', (req, res) => {
    try {
      const quizz = buildQuizz(req.params.quizId)
      res.status(200).json(quizz)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})  
    }
  })


router.post('/', (req, res) => {
    try {
        const quiz = Quiz.create(req.body)
        res.status(201).json(quiz)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )
router.delete('/', (req, res) => {
    try {
        const id = req.body.id
        Quiz.delete(id)
        res.status(201).end()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

router.delete('/:quizId', (req, res) => {
    try {
        
        Quiz.delete(req.params.quizId)
        res.status(201).end()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

router.put('/:quizId', (req, res) => {
    try {
        const quiz = Quiz.updateAttribute(req.params.quizId,"questions", req.body)
        res.status(201).json(quiz)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

router.patch('/:quizId', (req, res) => {
    try {
        const quiz = Quiz.updateAttribute(req.params.quizId,"easyQuestions", req.body)
        res.status(201).json(quiz)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})


module.exports = router
