import { IUser } from "../user/user.interface";
import { SubUserModel } from "./subUser.model";


const createUserIntoDB = async (payload: IUser) => {
  // const result = SubUserModel.create(payload);
  // return result;
  console.log(payload)
};

export const userServices = { createUserIntoDB };
