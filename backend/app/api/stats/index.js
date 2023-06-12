const { Router } = require('express')

const { Stat } = require('../../models')

const router = new Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(Stat.get())
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         }
)

router.post('/', (req, res) => {
    try {
        const stat = Stat.create(req.body)
        res.status(201).json(stat)
    } 
    catch (err) {
            console.log(err)
            res.status(500).json({message: 'Something went wrong', err})  
            }
         }
)

router.delete('/:statId', (req, res) => {
    try {
        Stat.delete(req.params.statId)
        res.status(201).end()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
}
)

router.put('/:statId', (req, res) => {
    try {
        const stat = Stat.update(req.params.statId, req.body)
        res.status(201).json(stat)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Something went wrong', err})
    }
}
)

module.exports = router