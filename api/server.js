import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import connectDb from "./config/dbConnect.js";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";

const PORT = process.env.PORT || 5000;
const app = express();

// Use middleware
app.use(morgan("common"));
app.use(helmet());
app.use(express.json());

// Connect to the DB
connectDb();

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
