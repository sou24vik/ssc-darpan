import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true
  },
  file: {
    // URL or file path
    type: String,
    required: true,
  },
  originalFilename: {
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

const noteModel = mongoose.models.note || mongoose.model("note", noteSchema);

export default noteModel;
