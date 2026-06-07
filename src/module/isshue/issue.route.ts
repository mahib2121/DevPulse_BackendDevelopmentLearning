import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";

import {
  createIssueController,
  getAllIssuesController,
} from "./issue.controller";

const router = Router();

router.post("/", authMiddleware, createIssueController);
router.get("/", getAllIssuesController);

export default router;
