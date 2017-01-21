import express from 'express'
import ExerciseModel from '../models/exercise'

const router = express.Router()

router.post('/', (req, res) => {
  const { exerciseId, exerciseName, description } = req.body
  const team = new ExerciseModel({
    exerciseId,
    exerciseName,
    description,
  })
  team.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:exerciseId', (req, res) => {
  ExerciseModel.find({ name: req.params.exerciseId }, 'exerciseId exercieseName description')
    .then(team => res.json({ team }))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
