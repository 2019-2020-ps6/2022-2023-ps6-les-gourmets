const { Router } = require('express')

const { Quiz } = require('../../models')

const router = new Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(Quiz.get())
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )
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

router.patch('/:quizId', (req, res) => {
    try {
        const quiz = Quiz.update(req.params.quizId, req.body)
        res.status(201).json(quiz)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

router.put(aa, (req, res) => {
    try {
        const quiz = Quiz.update(req.params.quizId, req.body)
        res.status(201).json(quiz)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})


module.exports = router
