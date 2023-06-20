import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";
import connectDb from "./config/dbConnect.js";
import { upload } from "./config/imgUpload.js";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import categoryRoute from "./routes/categories.js";

const PORT = process.env.PORT || 5000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use middleware
app.use(cors());
app.use(morgan("common"));
app.use(helmet());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Connect to the DB
connectDb();

// Upload post images
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded.");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
