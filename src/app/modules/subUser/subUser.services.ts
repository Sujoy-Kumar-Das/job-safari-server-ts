import { startSession } from 'mongoose';
import { IUser } from '../user/user.interface';
import { SubUserModel } from './subUser.model';
import { UserModel } from '../user/user.model';
import { ISubUser } from './subUser.interface';

const createUserIntoDB = async (password: string, payload: IUser) => {
  const subUser: Partial<ISubUser> = {};

  // set sub users property
  subUser.email = payload.email;
  subUser.role = 'user';
  subUser.password = password;

  // check is user already exists
  const isUserExists = await UserModel.isUserExists(payload.email);

  if (isUserExists) {
    throw new Error(`${payload.name.firstName} you already had a account.`);
  }

  // create session
  const session = await startSession();

  try {
    session.startTransaction(); // start transction

    // create user in subUsers model
    const newSubUser = await SubUserModel.create([subUser]);
    if (!newSubUser.length) {
      throw new Error('Faild to create user.');
    }

    payload.userId = newSubUser[0]._id;

    // create user in user model
    const user = await UserModel.create([payload]);

    if (!user.length) {
      throw new Error('Faid to create user');
    }

    await session.commitTransaction();
    await session.endSession();
    return user;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Server error for create user!');
  }
};

const createAdminIntoDB = async (password: string, payload: IUser) => {
  const subUser: Partial<ISubUser> = {};

  // set sub users property
  subUser.email = payload.email;
  subUser.role = 'admin';
  subUser.password = password;

  // check is user already exists
  const isUserExists = await UserModel.isUserExists(payload.email);

  if (isUserExists) {
    throw new Error(`${payload.name.firstName} you already had a account.`);
  }

  // create session
  const session = await startSession();

  try {
    session.startTransaction(); // start transction

    // create user in subUsers model
    const newSubUser = await SubUserModel.create([subUser]);
    if (!newSubUser.length) {
      throw new Error('Faild to create user.');
    }

    payload.userId = newSubUser[0]._id;

    // create user in user model
    const user = await UserModel.create([payload]);

    if (!user.length) {
      throw new Error('Faid to create user');
    }

    await session.commitTransaction();
    await session.endSession();
    return user;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Server error for create user!');
  }
};

export const userServices = { createUserIntoDB, createAdminIntoDB };
