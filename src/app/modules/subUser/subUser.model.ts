/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { ISubUser, TUserStatus } from './subUser.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

export const userStatus: TUserStatus[] = ['block', 'in-progress'];

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
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
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

SubUserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password as string,
    Number(config.SALT_ROUND),
  );
  next();
});

export const SubUserModel = model<ISubUser>('subUser', SubUserSchema);
