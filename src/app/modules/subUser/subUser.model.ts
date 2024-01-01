import { Schema, model } from 'mongoose';
import { ISubUser } from './subUser.interface';
import { userStatus } from '../user/user.constant';

const SubUserSchema = new Schema<ISubUser>(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
    },
    password: {
      type: String,
      required: [true, 'Password is requird.'],
    },
    status: {
      type: String,
      enum: userStatus,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const SubUserModel = model<ISubUser>('subUser', SubUserSchema);
