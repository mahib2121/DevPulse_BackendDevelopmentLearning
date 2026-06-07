import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import authRoutes from "./module/auth/auth.route";
import issueRoute from "./module/isshue/issue.route";
const app: Application = express();

// Middleware
app.use(express.json());

// Health Check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "DevPulse API is running",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/issues", issueRoute);
// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
