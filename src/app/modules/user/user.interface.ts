import { Model, Types } from 'mongoose';

export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}
export type Tgender = 'male' | 'female' | 'other';

export interface IUser {
  userId: Types.ObjectId;
  name: IUserName;
  email: string;
  photoURL: string;
  gender: Tgender;
}

export interface IUserMethod extends Model<IUser> {
  isUserExists(id: string): Promise<IUser | null>;
}
