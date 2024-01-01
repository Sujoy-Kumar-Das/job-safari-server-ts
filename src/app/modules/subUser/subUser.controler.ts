import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userServices } from './subUser.services';

const createUserControler = catchAsync(async (req, res) => {
  const { password, userData } = req.body;

  const result = await userServices.createUserIntoDB(password, userData);

  sendResponse(res, {
    statusCode: 200,
    message: 'User Created successfully',
    data: result,
  });
});

const createAdminControler = catchAsync(async (req, res) => {
  const { password, userData } = req.body;

  const result = await userServices.createAdminIntoDB(password, userData);

  sendResponse(res, {
    statusCode: 200,
    message: 'Admin Created successfully',
    data: result,
  });
});

export const userControler = { createUserControler, createAdminControler };
