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
router.delete('/', (req, res) => {
    try {
        Question.deleteAll()
        res.status(201).json(Questions)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})
module.exports = router