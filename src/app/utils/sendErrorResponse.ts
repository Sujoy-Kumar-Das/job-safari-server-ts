import { Response } from 'express';
import IError from '../interfaces/ISendError';
const sendErrorResponse = <T>(res: Response, data: IError<T>) => {
  res.status(data.statusCode).json({
    success: false,
    message: data.message,
    errorMessage: data.errorMessage,
    errorDetails: data.errorDetails,
    stake: data.stack,
  });
};

export default sendErrorResponse;
