import express from 'express'
import TeamModel from '../models/team'

const router = express.Router()

router.get('/', (req, res) => {
  TeamModel.find({}, 'teamId teamName description')
    .then(teams => res.json(teams))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
