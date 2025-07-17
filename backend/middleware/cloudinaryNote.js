import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import multer from "multer";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "notes",
    allowed_formats: ["pdf", "doc", "docx"],
    resource_type: "raw",
  },
});

export const upload = multer({ storage });
