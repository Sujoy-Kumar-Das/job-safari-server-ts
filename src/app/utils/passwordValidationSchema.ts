import { z } from 'zod';

const passwordValidationSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number',
  );

export default passwordValidationSchema;
