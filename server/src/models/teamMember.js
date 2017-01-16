import mongoose from 'mongoose'

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
})

module.exports = mongoose.model('TeamMember', teamMemberSchema)
