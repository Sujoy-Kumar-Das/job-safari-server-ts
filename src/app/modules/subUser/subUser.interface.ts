export interface ISubUser {
  email: string;
  password: string;
  status: 'block' | 'in-progress';
  isDeleted: false;
}
