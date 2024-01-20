import { model, Model, Types, Schema } from 'mongoose';
import { User } from '../interfaces/user.interface';

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, requires: true, unique: true },
    description: { type: String, required: false }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default model('User', userSchema);
