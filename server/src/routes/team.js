import express from 'express'
import TeamModel from '../models/team'

const router = express.Router()

router.post('/', (req, res) => {
  const { teamName, teamDesc, prizeOptions, allowSignUp } = req.body
  const team = new TeamModel({
    name: teamName,
    description: teamDesc,
    prizeOptions,
    allowSignUp,
  })
  team.save()
    .then(user => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:teamname', (req, res) => {
  TeamModel.find({ name: req.params.teamname }, 'name description prizeOptions')
    .then(team => res.json({ team }))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
