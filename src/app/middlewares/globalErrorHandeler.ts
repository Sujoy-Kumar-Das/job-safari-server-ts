import { ErrorRequestHandler } from 'express';
import sendErrorResponse from '../utils/sendErrorResponse';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);
  sendErrorResponse(res, {
    statusCode: 400,
    message: error.message,
    errorMessage: '',
    errorDetails: error,
    stack: '',
  });
};

export default globalErrorHandeler;
