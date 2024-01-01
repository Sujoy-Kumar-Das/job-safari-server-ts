import { Schema, model } from 'mongoose';
import { IUser, IUserMethod, IUserName, Tgender } from './user.interface';

export const gender: Tgender[] = ['male', 'female', 'other'];


const UserNameSchema = new Schema<IUserName>({
  firstName: {
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

export const UserSchema = new Schema<IUser, IUserMethod>(
  {
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
    photoURL: {
      type: String,
      required: [true, 'Users photo is required.'],
    },
    gender: {
      type: String,
      enum: gender,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.statics.isUserExists = async function (email: string) {
  const user = await UserModel.findOne({ email });
  return user;
};

export const UserModel = model<IUser, IUserMethod>('user', UserSchema);
