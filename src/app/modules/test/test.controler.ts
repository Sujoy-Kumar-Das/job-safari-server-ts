import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const testControler = catchAsync(async (req, res) => {
  sendResponse(res, {
    statusCode: 200,
    message: 'Job Safari server is running.',
    data: [],
  });
});

export default testControler;
