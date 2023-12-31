import { Response } from 'express';
import ISendResponse from '../interfaces/ISendResponse';

const sendResponse = <T>(res: Response, data: ISendResponse<T>) => {
  res.status(data.statusCode).json({
    success: true,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
