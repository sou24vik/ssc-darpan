import previousYearQuestionModel from "../models/previousYearQuestionModel.js";
import cloudinary from "../config/cloudinary.js";

// ========== Upload ========== //
const uploadQuestion = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const { title, exam, year, category, description } = req.body;

    const newQuestion = new previousYearQuestionModel({
      title,
      exam,
      year,
      category,
      description,
      file: `${req.file.path}.pdf`,
      originalFilename: req.file.originalname,
    });

    await newQuestion.save();

    res.status(201).json({
      success: true,
      message: "Previous Year Question Uploaded",
      data: newQuestion,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      success: false,
      message: "Error uploading previous year question",
      error,
    });
  }
};

// ========== Delete ========== //
const deleteQuestion = async (req, res) => {
  try {
    const question = await previousYearQuestionModel.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Previous year question not found",
      });
    }

    // Delete from Cloudinary
    if (question.file) {
      const fileUrlParts = question.file.split("/");
      const filenameWithExt = fileUrlParts[fileUrlParts.length - 1];
      const publicIdWithExt = filenameWithExt.split(".")[0];
      const folder = "previous_year_questions";

      await cloudinary.uploader.destroy(`${folder}/${publicIdWithExt}`, {
        resource_type: "raw",
      });
    }

    await previousYearQuestionModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Previous year question deleted",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete previous year question",
      error,
    });
  }
};

// ========== Get All Exams ========== //
const getExams = async (req, res) => {
  try {
    const exams = await previousYearQuestionModel.distinct("exam");
    res.json({ success: true, exams });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch exams",
      error,
    });
  }
};

// ========== Get Years by Exam ========== //
const getYearsByExam = async (req, res) => {
  try {
    const years = await previousYearQuestionModel
      .find({ exam: req.params.exam })
      .distinct("year");

    res.json({ success: true, years });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch years for this exam",
      error,
    });
  }
};

// ========== Get Files by Exam, Year, Category ========== //
const getFiles = async (req, res) => {
  try {
    const { exam, year, category } = req.params;

    const files = await previousYearQuestionModel.find({
      exam,
      year,
      category,
    });

    res.json({ success: true, files });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch files",
      error,
    });
  }
};

// ========== Optional List for Admin ========== //
const listQuestion = async (req, res) => {
  try {
    const { exam, year } = req.query;
    const filter = {};
    if (exam) filter.exam = exam;
    if (year) filter.year = year;

    const questions = await previousYearQuestionModel.find(filter);

    res.json({ success: true, data: questions });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to list questions",
      error,
    });
  }
};

export {
  uploadQuestion,
  deleteQuestion,
  getExams,
  getYearsByExam,
  getFiles,
  listQuestion,
};
