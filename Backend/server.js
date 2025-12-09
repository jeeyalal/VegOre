
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";   // ✅ FIXED HERE
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ MIDDLEWARES
app.use(express.json());
app.use(cors());

// ✅ STATIC FOLDERS
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/images", express.static(path.join(__dirname, "uploads")));

// ✅ DATABASE
connectDB();

// ✅ ROUTES
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("✅ API WORKING");
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
