import { Types } from 'mongoose';

export interface IUserName {
  fristName: string;
  middleName?: string;
  lastName: string;
}

export type TUserStatus = 'block' | 'in-progress';
export type Tgender = 'male' | 'female' | 'other';

export interface IUser {
  userId: Types.ObjectId;
  name: IUserName;
  email: string;
  password: string;
  photoURL: string;
  gender: Tgender;
  status: TUserStatus;
  isDeleted: boolean;
}
