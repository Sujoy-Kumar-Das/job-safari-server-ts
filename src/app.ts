import express, { Application } from 'express';
import cors from 'cors';
import router from './app/router';
import notFoundErrorHandeler from './app/middlewares/notFoundErrorHandeler';
import globalErrorHandeler from './app/middlewares/globalErrorHandeler';
const app: Application = express();

// application middlewares
app.use(express.json());
app.use(cors());

// application router
app.use('/api', router);

// handle error middleware
app.use(notFoundErrorHandeler);
app.use(globalErrorHandeler);

export default app;
