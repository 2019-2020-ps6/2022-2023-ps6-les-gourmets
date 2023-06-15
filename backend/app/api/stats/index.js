const { Router, request } = require('express')
const { createDefaultStats,updatedStats, updatedTimer, buildStats, resetStats } = require('./manager')
const { Stat, Quiz } = require('../../models');

const router = new Router();

router.get('/', (req, res) => {
    try {
        const stats = buildStats(Stat.get())
        res.status(200).json(stats)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         }
)

router.get('/:userId', (req, res) => {
    try {
        const stats = buildStats(Stat.getByAttributesId(["user"], [req.params.userId]))
        res.status(200).json(stats)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         }
)

router.post('/', (req, res) => {
    try {
        const defaultStats = createDefaultStats(req.body.quizId,req.body.userId)
        const stat = Stat.create(defaultStats)
        res.status(201).json(stat)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         }
)

router.delete('/:userId/:quizId', (req, res) => {
    try {
        Stat.deleteByAttributesId(["user", "quiz"],[req.params.userId, req.params.quizId])
        res.status(201).end()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
}
)

router.put('/:userId/:type', (req, res) => {
    try {
        const stat = Stat.getByAttributesId(["user","quiz"], [req.params.userId,req.body.quizId])  
        switch(req.params.type){
            case "timer":
                const statUpdatedTimer = updatedTimer(stat, req.body.timer)
                const resstatTimer = Stat.update(stat[0].id, statUpdatedTimer[0])
                res.status(201).json(resstatTimer)
                break;
            case "answers":
                const statUpdatedQuestions = updatedStats(stat, req.body.questions, req.body.answers)
                const resstatQuestions = Stat.update(stat[0].id, statUpdatedQuestions[0])
                res.status(201).json(resstatQuestions)
                break; 
            default:
                break;
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
}
)

router.patch('/:quizId', (req, res) => {
    try {
        const stats = Stat.getByAttributesId(["quiz"], [req.body.id])  
        const statReseted = resetStats(stats)
        let resstat = []
        statReseted.forEach(element => {
            resstat.push(Stat.update(element.id, element))
        });
        res.status(201).json(resstat)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
}
)

router.patch('/', (req, res) => {
    try {
        const quizs = Quiz.getByAttributesId(["questions"], [req.body.id]).concat(Quiz.getByAttributesId(["easyQuestions"], [req.body.id]))
        let stats = []
        quizs.forEach(quiz => {
            stats = stats.concat(Stat.getByAttributesId(["quiz"], [quiz.id]))
        });
        const statReseted = resetStats(stats)
        let resstat = []
        statReseted.forEach(element => {
            resstat.push(Stat.update(element.id, element))
        });
        res.status(201).json(resstat)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
}
)

module.exports = router