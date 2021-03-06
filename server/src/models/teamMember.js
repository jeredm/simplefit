import mongoose from 'mongoose'

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  userId: {
    type: String,
    required: true,
  },
  teamId: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('TeamMember', teamMemberSchema)
