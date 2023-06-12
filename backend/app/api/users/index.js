const { Router } = require('express')

const { User } = require('../../models')

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

router.get('/:userId', (req, res) => {
    try {
        res.status(200).json(User.getById(req.params.userId))
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
    }   )
    
router.get('/:userId/quizzes', (req, res) => {
    try {
        res.status(200).json(User.getById(req.params.userId).quizzes)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }

})

router.post('/', (req, res) => {
    try {
        const user = User.create(req.body)
        res.status(201).json(user)
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

router.put('/:userId', (req, res) => {
    try {
        const user = User.update(req.params.userId, req.body)
        res.status(201).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})

router.patch('/:userId', (req, res) => {
    try {
        const user = User.updateAttribute(req.params.userId,"quizzes", req.body)
        res.status(201).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
})


module.exports = router
