const { Router } = require('express')

const { Users, User } = require('../../models')

const router = new Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(User.get())
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )
router.post('/', (req, res) => {
    try {
        const quiz = User.create(req.body)
        res.status(201).json(Users)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         } )

router.delete('/:userId', (req, res) => {
    try {
        User.delete(req.params.userId)
        res.status(201).end()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

module.exports = router
