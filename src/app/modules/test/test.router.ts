import express from 'express';
import testControler from './test.controler';
const router = express.Router();

router.get('/', testControler);

export const testRouter = router;
