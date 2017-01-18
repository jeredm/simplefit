import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: { unique: true },
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('User', userSchema)
