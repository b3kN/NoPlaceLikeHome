import mongoose from 'mongoose';
import Availability from './availability';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Availability };

export { connectDb };

export default models;
