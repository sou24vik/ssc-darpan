import noteModel from "../models/noteModel.js";
import cloudinary from "../config/cloudinary.js";

// Upload Note
const uploadNote = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const note = new noteModel({
      title: req.body.title,
      subject: req.body.subject,
      chapter: req.body.chapter,
      file: req.file.path,
      description: req.body.description,
      uploaded_at: new Date(),
    });

    await note.save();
    res.status(201).json({ success: true, message: "Note uploaded", note });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error uploading note", error });
  }
};

// List All Notes or By Subject
const listNotes = async (req, res) => {
  try {
    const { subject } = req.query;
    const filter = subject ? { subject } : {};
    const notes = await noteModel.find(filter);
    res.status(200).json({ success: true, data: notes });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes", error });
  }
};

// Get Single Note By ID
const getNoteById = async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch note", error });
  }
};

// Delete Note (with Cloudinary file deletion)
const deleteNote = async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Delete file from Cloudinary
    if (note.file) {
      const fileUrlParts = note.file.split("/");
      const filenameWithExt = fileUrlParts[fileUrlParts.length - 1];
      const publicIdWithExt = filenameWithExt.split(".")[0];
      const folder = "notes";

      await cloudinary.uploader.destroy(`${folder}/${publicIdWithExt}`, {
        resource_type: "raw",
      });
    }

    await noteModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Note and file deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete note", error });
  }
};

// Get all distinct subjects
const getSubjects = async (req, res) => {
  try {
    const subjects = await noteModel.distinct("subject");
    res.json({ success: true, subjects });
  } catch (error) {
    console.error("Error in getSubjects:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching subjects", error });
  }
};

// Get All Chapters for a Subject
const getChaptersBySubject = async (req, res) => {
  const { subject } = req.params;
  try {
    const chapters = await noteModel.find({ subject }).distinct("chapter");
    res.json({ success: true, chapters });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching chapters", error });
  }
};

// Get Notes by Subject
const getNotesBySubject = async (req, res) => {
  const { subject } = req.params;
  try {
    const notes = await noteModel.find({ subject });
    res.json({ success: true, notes });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching notes", error });
  }
};

// Get Notes by Subject & Chapter
const getNotesBySubjectAndChapter = async (req, res) => {
  const { subject, chapter } = req.params;
  try {
    const notes = await noteModel.find({ subject, chapter });
    res.json({ success: true, notes });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching notes", error });
  }
};

export {
  uploadNote,
  listNotes,
  getNoteById,
  deleteNote,
  getSubjects,
  getChaptersBySubject,
  getNotesBySubject,
  getNotesBySubjectAndChapter,
};
