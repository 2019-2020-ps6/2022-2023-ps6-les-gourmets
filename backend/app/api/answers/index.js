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

module.exports = router
