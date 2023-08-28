// started from here 28 aug 2023

const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'please provide company name'],
      maxlength: 30,
    },
    position: {
      type: String,
      required: [true, 'please provide positon '],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide user'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Job', JobSchema);
