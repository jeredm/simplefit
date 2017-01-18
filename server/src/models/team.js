import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  teamId: {
    type: String,
    required: true,
    index: { unique: true },
  },
  teamName: {
    type: String,
    required: true,
  },
  description: String,
  prizeOptions: [String],
  allowSignUp: Boolean,
})

module.exports = mongoose.model('Team', teamSchema)
