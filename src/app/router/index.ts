import expess from 'express';
import { testRouter } from '../modules/test/test.router';
import { userRouter } from '../modules/subUser/subUser.router';
const router = expess.Router();

const modulesRoutes = [
  {
    path: '/',
    route: testRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
];

modulesRoutes.map((route) => router.use(route.path, route.route));

export default router;
