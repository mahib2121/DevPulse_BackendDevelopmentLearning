import jwt from "jsonwebtoken";
import config from "../config/envConfig";

export interface UserJwtPayload {
  id: number;
  name: string;
  role: string;
}

export const generateToken = (payload: UserJwtPayload): string => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string): UserJwtPayload => {
  const decoded = jwt.verify(token, config.jwtSecret);

  if (typeof decoded === "string" || !decoded) {
    throw new Error("Invalid token");
  }

  return decoded as UserJwtPayload;
};
