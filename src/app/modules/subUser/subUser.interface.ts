

export type TUserStatus = 'block' | 'in-progress';

export interface ISubUser {
  email: string;
  password: string;
  status: TUserStatus;
  role: 'user' | 'admin';
  isDeleted: false;
}



