import express from "express";
import {
  uploadNote,
  listNotes,
  getNoteById,
  deleteNote,
  getSubjects,
  getChaptersBySubject,
  getNotesBySubject,  
  getNotesBySubjectAndChapter,
} from "../controllers/noteController.js";
import { upload } from "../middleware/cloudinaryNote.js";

const noteRouter = express.Router();

// Upload Note
noteRouter.post("/upload", upload.single("file"), uploadNote);

// Fetch Subjects & Chapters
noteRouter.get("/subjects", getSubjects); // All unique subjects
noteRouter.get("/chapters/:subject", getChaptersBySubject); // Chapters under a subject

// Fetch Notes
noteRouter.get("/list", listNotes); // All notes or by ?subject=query
noteRouter.get("/list/:subject", getNotesBySubject); // Notes by subject
noteRouter.get("/notes/:subject/:chapter", getNotesBySubjectAndChapter); // Notes by subject & chapter

// Delete Note
noteRouter.post("/delete/:id", deleteNote);

// Fetch Single Note
noteRouter.get("/:id", getNoteById); // Single note by ID

export default noteRouter;
