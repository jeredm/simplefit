import express from 'express'
import PrizeModel from '../models/prize'

const router = express.Router()

router.post('/', (req, res) => {
  const { prizeName, description, points } = req.body
  const prize = new PrizeModel({
    prizeName,
    description,
    points,
  })
  prize.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:prizeName', (req, res) => {
  PrizeModel.find({ name: req.params.prizeName }, 'prizeName, description, points')
    .then(team => res.json({ prize }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/', (req, res) => {
  PrizeModel.find({}, 'prizeName, description, points')
    .then(prizes => res.json(prizes))
    .catch(err => res.status(500).json({ error: err }))
})


export default router
