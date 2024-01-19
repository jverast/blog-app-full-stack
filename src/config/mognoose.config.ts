import 'dotenv/config';
import mongoose from 'mongoose';

const dbConnect = async (): Promise<void> => {
  const DB_URI = <string>process.env.DB_URI;
  await mongoose.connect(DB_URI);
};

export default dbConnect;
