import 'dotenv/config';
import mongoose from 'mongoose';
import logger from '../utils/logger.util';

const connection = () => {
  const DB_URI = <string>process.env.DB_URI;

  mongoose
    .connect(DB_URI)
    .then(() => {
      logger.info('Connected to MongoDB');
    })
    .catch((e) => {
      logger.error('Error connecting to MongoDB', e);
    });
};

export default { connection };
