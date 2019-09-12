import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
  user: {
    type: String,
    unique: true,
    required: true
  },
  weekends: {
    type: Boolean,
    unique: false,
    required: true
  },
  startTime: {
    type: Number,
    unique: false,
    required: true
  },
  endTime: {
    type: Number,
    unique: false,
    required: true
  },
  increment: {
    type: String,
    unique: false,
    required: true
  },
  daysOff: {
    type: [String],
    unique: false,
    required: true
  }
});

availabilitySchema.statics.findByUser = async function (username) {
  let availability = await this.findOne({
    user: username
  });

  if (!availability) {
    availability = {
      error: 'User not found'
    };
  }

  return availability;
};

const Availability = mongoose.model('Availability', availabilitySchema);

export default Availability;
