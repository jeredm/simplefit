import express from 'express'
import UserModel from '../models/user'

const router = express.Router()

router.post('/', (req, res) => {
  const { userId, name, email } = req.body
  const user = new UserModel({
    userId,
    name,
    email,
  })
  user.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:teamId', (req, res) => {
  UserModel.find({ name: req.params.userId }, 'userId, name, email')
    .then(user => res.json({ user }))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
