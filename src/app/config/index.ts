import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  PORT: process.env.port,
  DB_URL: process.env.db_url,
  SALT_ROUND:process.env.salt_number
};
