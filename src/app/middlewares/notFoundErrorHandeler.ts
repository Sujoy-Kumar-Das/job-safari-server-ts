import { RequestHandler } from 'express';
import sendErrorResponse from '../utils/sendErrorResponse';

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

const notFoundErrorHandeler: RequestHandler = (req, res, next) => {
  sendErrorResponse(res, {
    statusCode: 404,
    message: 'API NOT FOUND',
    errorMessage: '',
    errorDetails: [],
    stack: '',
  });
};

export default notFoundErrorHandeler;
