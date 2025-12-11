import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
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

// =============================================
// ✅ FIXED CORS CONFIG (WORKS IN EXPRESS v5 + Render)
// =============================================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://veg-ore.vercel.app",
  "https://vegore-admin.vercel.app",
  "https://vegore-backend.onrender.com"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // allow temporarily
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
  })
);

// ⭐ FIX: Express v5-safe OPTIONS handler
app.options(/.*/, cors());

// =============================================
// Middleware
// =============================================
app.use(express.json());

// =============================================
// Static
// =============================================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/images", express.static(path.join(__dirname, "uploads")));

// =============================================
// Routes
// =============================================
connectDB();
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);

// =============================================
// Test Route
// =============================================
app.get("/", (req, res) => {
  res.send("✅ VegOre API is running");
});

// =============================================
// Error Handler
// =============================================
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// =============================================
// Start Server
// =============================================
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
