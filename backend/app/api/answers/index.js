const { Router } = require('express')

const { Answer } = require('../../models')

const router = new Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(Answer.get())
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )

router.get('/:answerId', (req, res) => {
    try {
        res.status(200).json(Answer.getById(req.params.answerId))
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
    }   )

router.post('/', (req, res) => {
    try {
        const answer = Answer.create(req.body)
        res.status(201).json(answer)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )

router.delete('/:answerId', (req, res) => {
    try {
        Answer.delete(req.params.answerId)
        res.status(201).end()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

router.patch('/:answerId', (req, res) => {
    try {
        const answer = Answer.update(req.params.answerId, req.body)
        res.status(201).json(answer)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

module.exports = router
