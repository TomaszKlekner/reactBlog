import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import { v4 as uuidv4 } from "uuid";
import { compareAsc, format } from "date-fns";

const PORT = process.env.PORT || 5000;
const app = express();

// Use middleware
app.use(morgan("tiny"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
