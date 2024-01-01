import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

export const validateData = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};
