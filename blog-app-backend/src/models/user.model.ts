import { model, Model, Types, Schema } from 'mongoose';
import { User } from '../interfaces/user.interface';

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, default: '' },
    email: { type: String, requires: true, unique: true },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
      }
    ],
    description: { type: String, default: '' }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

userSchema.set('toJSON', {
  transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.password;
    delete returnedObject._id;
  }
});

export default model('User', userSchema);
