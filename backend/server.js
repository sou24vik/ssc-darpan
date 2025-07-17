import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import noteRouter from "./routes/noteRoute.js";
import previousYearQuestionRouter from "./routes/previousYearQuestionRoute.js";
import userRouter from "./routes/userRoute.js";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App Config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// DB Connection
connectDB();

// Routes
app.use("/api/notes", noteRouter);
app.use("/api/previousYear", previousYearQuestionRouter);
app.use("/api/user", userRouter);

// Serve static files (if needed)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("API WORKING!");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
