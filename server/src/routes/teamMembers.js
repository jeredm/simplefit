import express from 'express'
import TeamMemberModel from '../models/teamMember'

const router = express.Router()

router.get('/', (req, res) => {
  TeamMemberModel.find({}, 'name userId, teamId')
    .then(teamMembers => res.json(teamMembers))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
