import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../config/jwt";

// No need for AuthRequest interface anymore!

export const authMiddleware = (
  req: Request, // Change this back to standard Request
  res: Response,
  next: NextFunction,
): void => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Authentication token is missing",
      });
      return;
    }

    const decoded = verifyToken(token);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
