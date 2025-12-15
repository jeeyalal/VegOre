

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import subscriptionRouter from "./routes/subscriptionRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =============================================
// ✅ SINGLE, CORRECT CORS CONFIG
// =============================================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://veg-ore.vercel.app",
  "https://vegore-admin.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(null, true); // allow for now
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-auth-token",
      "token", 
      "admin-token",
    ],
  })
);

// REQUIRED for preflight
app.options(/.*/, cors());

// =============================================
// Middleware
// =============================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =============================================
// Static
// =============================================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =============================================
// DB
// =============================================
connectDB();

// =============================================
// Routes
// =============================================
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/subscriptions", subscriptionRouter);

// =============================================
// Health Check
// =============================================
app.get("/", (req, res) => {
  res.send("✅ VegOre API running");
});

// =============================================
// Global Error Handler
// =============================================
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// =============================================
// Start Server
// =============================================
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
