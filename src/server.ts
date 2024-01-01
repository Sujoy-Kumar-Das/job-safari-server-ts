import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

const dbConnect = async () => {
  try {
    app.listen(config.PORT, () => {
      console.log(`Job safari server is runing on port ${config.PORT}`);
    });
    await mongoose.connect(config.DB_URL as string);
    console.log('Database connected successfully');
  } catch (error) {
    throw new Error('network error please check your internet connection.');
  }
};

dbConnect();

