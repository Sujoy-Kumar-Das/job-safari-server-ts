import { z } from 'zod';
import passwordValidationSchema from '../../utils/passwordValidationSchema';
import { gender } from './user.model';

const userNameValidationSchema = z.object({
  firstName: z
    .string({ required_error: 'Users first name is required.' })
    .min(2, { message: 'First name must contain at least 2 character' }),
  middleName: z
    .string({ required_error: 'Users middle name is required.' })
    .min(2, { message: 'Middle name must contain at least 2 character' })
    .optional(),
  lastName: z
    .string({ required_error: 'Users last name is required.' })
    .min(2, { message: 'Last name must contain at least 2 character' }),
});

const createUserValidationSchema = z.object({
  body: z.object({
    password: passwordValidationSchema,
    userData: z.object({
      name: userNameValidationSchema,
      email: z.string({ required_error: 'Email is required.' }).email(),
      photoURL: z.string({ required_error: 'Users photo is required.' }).url(),
      gender: z.enum([...gender] as [string, ...string[]]),
    }),
  }),
});

export const userValidationSchema = {
  createUserValidationSchema,
};
