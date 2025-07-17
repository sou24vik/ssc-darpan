import mongoose from "mongoose";

const previousYearQuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  exam: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true, // mains / prelims
  },
  file: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  uploaded_at: {
    type: Date,
    default: Date.now,
  },
});

const previousYearQuestionModel = mongoose.model(
  "PreviousYearQuestion",
  previousYearQuestionSchema
);

export default previousYearQuestionModel;
