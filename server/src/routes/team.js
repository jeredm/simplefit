import express from 'express'
import TeamModel from '../models/team'

const router = express.Router()

router.post('/', (req, res) => {
  const { teamId, teamName, teamDesc, prizeOptions, allowSignUp } = req.body
  const team = new TeamModel({
    teamId,
    teamName,
    description: teamDesc,
    prizeOptions,
    allowSignUp,
  })
  team.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:teamId', (req, res) => {
  TeamModel.find({ name: req.params.teamId }, 'teamId teamName description prizeOptions')
    .then(team => res.json({ team }))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
