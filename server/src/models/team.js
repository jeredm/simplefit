import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  description: String,
})

module.exports = mongoose.model('Team', teamSchema)
