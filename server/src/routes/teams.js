import express from 'express'

let router = express.Router()

router.post('/', (req, res) => {
  res.json({ success: true })
})

router.get('/:identifier', (req, res) => {
  res.json({
    teamid: "team id",
    teamname: "test team"
  })
})

export default router
