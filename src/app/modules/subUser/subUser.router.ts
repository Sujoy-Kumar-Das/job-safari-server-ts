import express from 'express';
import { userControler } from './subUser.controler';
import { validateData } from '../../middlewares/validateData';
import { userValidationSchema } from '../user/user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateData(userValidationSchema.createUserValidationSchema),
  userControler.createUserControler,
);

router.post(
  '/create-admin',
  validateData(userValidationSchema.createUserValidationSchema),
  userControler.createAdminControler,
);

export const userRouter = router;
