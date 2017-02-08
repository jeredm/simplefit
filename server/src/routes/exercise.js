import express from 'express'
import ExerciseModel from '../models/exercise'

const router = express.Router()

router.post('/', (req, res) => {
  const { exerciseId, exerciseName, description, activityCnt } = req.body
  const exercise = new ExerciseModel({
    exerciseId,
    exerciseName,
    description,
    activityCnt,
  })
  exercise.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:exerciseId', (req, res) => {
  ExerciseModel.find({ name: req.params.exerciseId }, 'exerciseId exercieseName description activityCnt')
    .then(exercise => res.json({ exercise }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/', (req, res) => {
  ExerciseModel.find({}, 'exerciseId exercieseName description activityCnt')
    .then(exercises => res.json(exercises))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
