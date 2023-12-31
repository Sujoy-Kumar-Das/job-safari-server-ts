import expess from 'express';
import { testRouter } from '../modules/test/test.controler';
const router = expess.Router();

const modulesRoutes = [
  {
    path: '/api',
    route: testRouter,
  },
];

modulesRoutes.map((route) => router.use(route.path, route.route));

export default router;
