import mongoose from 'mongoose'

const exerciseSchema = new mongoose.Schema({
  exerciseId: {
    type: String,
    required: true,
    index: { unique: true },
  },
  exerciseName: {
    type: String,
    required: true,
  },
  description: String,
})

module.exports = mongoose.model('Exercise', exerciseSchema)
