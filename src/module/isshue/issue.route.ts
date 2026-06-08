import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";

import {
  createIssueController,
  getAllIssuesController,
  getIssueByIdController,
} from "./issue.controller";

const router = Router();

router.post("/", authMiddleware, createIssueController);
router.get("/", getAllIssuesController);
router.get("/all", getAllIssuesController);
router.get("/:id", getIssueByIdController);
export default router;
