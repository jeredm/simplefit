import express from 'express'
import TeamModel from '../models/team'

const router = express.Router()

router.post('/', (req, res) => {
  const { teamName, teamDesc } = req.body
  const team = new TeamModel({
    name: teamName,
    description: teamDesc,
  })
  team.save()
    .then(user => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:teamname', (req, res) => {
  TeamModel.find(req.params.teamname, 'name description')
  .then(team => res.json({ team }))
})

export default router
