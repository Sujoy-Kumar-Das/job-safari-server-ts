import { z } from 'zod';
import { gender, userStatus } from './user.constant';

const userNameValidationSchema = z.object({
  firstName: z
    .string({ required_error: 'Users frist name is required.' })
    .min(2),
  middleName: z
    .string({ required_error: 'Users middle name is required.' })
    .min(2)
    .optional(),
  lastName: z.string({ required_error: 'Users last name is required.' }),
});

const createUserValidationSchema = z.object({
  body: z.object({
    name: userNameValidationSchema,
    email: z.string({ required_error: 'Email is required.' }).email(),
    password: z.string({ required_error: 'Password is required.' }),
    photoURL: z.string({ required_error: 'Users photo is required.' }).url(),
    status: z.enum([...userStatus] as [string, ...string[]]),
    gender: z.enum([...gender] as [string, ...string[]]),
  }),
});

export const userValidationSchema = {
  createUserValidationSchema,
};
