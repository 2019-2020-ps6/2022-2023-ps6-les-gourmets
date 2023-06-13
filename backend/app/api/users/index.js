const { Router } = require('express')

const { User } = require('../../models')
const { buildUser, buildUsers, IdTransform } = require('./manager')
const QuizzesRouter = require('../quizzes')
const router = new Router();

router.use('/:userId/quizzes', QuizzesRouter)

router.get('/', (req, res) => {
    try {
      const users = buildUsers()
      res.status(200).json(users)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})  
    }
  })
  
  router.get('/:quizId', (req, res) => {
    try {
      const user = buildUser(req.params.quizId)
      res.status(200).json(user)
    } catch (err) {
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
        goodUser = IdTransform(req.body)
        const user = User.update(req.params.userId, goodUser)
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
