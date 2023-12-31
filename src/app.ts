import express, { Application } from 'express';
import cors from 'cors';
import router from './app/router';
import notFoundErrorHandeler from './app/middlewares/notFoundErrorHandeler';
const app: Application = express();

// application middlewares
app.use(express.json());
app.use(cors());

// application router
app.use(router);

// handle error middleware
app.use(notFoundErrorHandeler);

export default app;
