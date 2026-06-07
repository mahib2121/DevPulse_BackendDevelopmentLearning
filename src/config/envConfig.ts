import dotenv from "dotenv";
import { env } from "process";
dotenv.config();
const config = {
  port: env.PORT,
  databaseUrl: env.DATABASE_URL,
  jwtSecret: env.JWT_SECRET as string,
};
export default config;
