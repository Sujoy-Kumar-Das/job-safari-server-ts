import express from 'express';
import testControler from './test.controler';
const router = express.Router();

router.get('/test', testControler);

export const testRouter = router;
