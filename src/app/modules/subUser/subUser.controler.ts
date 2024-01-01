import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userServices } from './subUser.services';

const createUserControler = catchAsync(async (req, res) => {
  const result = await userServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    message: 'User Created successfully',
    data: result,
  });
});

export const userControler = { createUserControler };
