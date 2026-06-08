import type { Request, Response } from "express";

import { validateIssue } from "./issue.validation";
import { createIssue, getAllIssues, getIssueById } from "./issue.service";

export const createIssueController = async (req: Request, res: Response) => {
  try {
    const error = validateIssue(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const { title, description, type } = req.body;

    const reporterId = (req as any).user?.id;
    console.log(reporterId);

    const issue = await createIssue(title, description, type, reporterId);

    return res.status(201).json({
      success: true,
      message: "Issue created successfully",
      data: issue,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllIssuesController = async (req: Request, res: Response) => {
  try {
    const issues = await getAllIssues();

    res.status(200).json({
      success: true,
      message: "Issues retrieved successfully",
      data: issues,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getIssueByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid issue ID",
      });
    }

    const issue = await getIssueById(id);

    if (!issue) {
      return res.status(404).json({
        success: false,
        message: "Issue not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Issue retrieved successfully",
      data: issue,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
