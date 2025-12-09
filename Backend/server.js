
// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";   // ✅ FIXED HERE
// import foodRouter from "./routes/foodRoutes.js";
// import userRouter from "./routes/userRoutes.js";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 4000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ✅ MIDDLEWARES
// app.use(express.json());
// app.use(cors());

// // ✅ STATIC FOLDERS
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/images", express.static(path.join(__dirname, "uploads")));

// // ✅ DATABASE
// connectDB();

// // ✅ ROUTES
// app.use("/api/food", foodRouter);
// app.use("/api/user", userRouter);

// // ✅ TEST ROUTE
// app.get("/", (req, res) => {
//   res.send("✅ API WORKING");
// });

// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });







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

// ✅ IMPROVED CORS CONFIGURATION
const allowedOrigins = [
  'http://localhost:5173',
  'https://veg-ore.vercel.app',
  'https://vegore-backend.onrender.com'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ MIDDLEWARES
app.use(express.json());

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
  res.send("✅ VegOre API is running");
});

// ✅ ERROR HANDLER
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`);
});