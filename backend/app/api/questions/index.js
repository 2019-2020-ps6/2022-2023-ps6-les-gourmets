const { Router } = require('express')

const { Question, Questions } = require('../../models')

const router = new Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(Question.get())
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )
router.post('/', (req, res) => {
    try {
        const question = Question.create(req.body)
        res.status(201).json(Questions)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )


router.delete('/:questionId', (req, res) => {
    try {
        Question.delete(req.params.questionId)
        res.status(201).end()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

router.put('/:questionId', (req, res) => {
    try {
        const question = Question.update(req.params.questionId, req.body)
        res.status(201).json(question)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})


router.patch('/:questionId', (req, res) => {
    try {
        const question = Question.update(req.params.questionId, req.body)
        res.status(201).json(question)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})
module.exports = router