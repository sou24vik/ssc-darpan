import express from "express";
import { uploadPreviousQuestion } from "../middleware/cloudinaryQuestion.js";
import {
  uploadQuestion,
  listQuestion,
  deleteQuestion,
  getExams,
  getYearsByExam,
  getFiles,
} from "../controllers/previousYearQuestionController.js";

const previousYearQuestionRouter = express.Router();

// ========== Admin Upload/Delete ========== //
previousYearQuestionRouter.post(
  "/upload",
  uploadPreviousQuestion.single("file"),
  uploadQuestion
);
previousYearQuestionRouter.post("/delete/:id", deleteQuestion);

// ========== Fetching Data for UI Navigation ========== //
previousYearQuestionRouter.get("/exams", getExams); // Step 1: Exam list
previousYearQuestionRouter.get("/years/:exam", getYearsByExam); // Step 2: Year list by exam
previousYearQuestionRouter.get("/files/:exam/:year/:category", getFiles); // Step 3: Files based on exam, year and category (Mains/Preli)

// ========== Optional Endpoint for Admin ========== //
previousYearQuestionRouter.get("/list", listQuestion); // Admin view (optional)

export default previousYearQuestionRouter;
