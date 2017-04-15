import mongoose from 'mongoose'

const prizeSchema = new mongoose.Schema({
  prizeName: {
    type: String,
    required: true,
    index: { unique: true },
  },
  descrition: String,
  points: Number,
})

module.exports = mongoose.model('Prize', prizeSchema)
