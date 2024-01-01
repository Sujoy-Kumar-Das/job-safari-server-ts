import { Schema, model } from 'mongoose';
import { IUser, IUserName } from './user.interface';
import { gender, userStatus } from './user.constant';

const UserNameSchema = new Schema<IUserName>({
  fristName: {
    type: String,
    required: [true, 'Users Frist name is required.'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Users last name is required.'],
  },
});

export const UserSchema = new Schema<IUser>({
  userId: Schema.Types.ObjectId,
  name: {
    type: UserNameSchema,
    required: [true, 'User name is required.'],
  },
  email: {
    type: String,
    required: [true, 'User email address is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  photoURL: {
    type: String,
    required: [true, 'Users photo is required.'],
  },
  status: {
    type: String,
    enum: userStatus,
    default: 'in-progress',
  },
  gender: {
    type: String,
    enum: gender,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const UserModel = model<IUser>('user', UserSchema);
