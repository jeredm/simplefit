import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  res.json({ success: true })
})

router.get('/:identifier', (req, res) => {
  res.json({
    teamname: 'test team',
  })
})

export default router
