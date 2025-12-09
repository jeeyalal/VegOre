
// import express from "express";
// import { addFood ,listFood,removeFood} from "../controllers/foodController.js";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const foodRouter = express.Router();

// // ✅ Multer storage (SAFE for Windows)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../uploads"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // ✅ Route
// foodRouter.post("/add", upload.single("image"), addFood);
// foodRouter.get("/list",listFood)
// foodRouter.post("/remove",removeFood)

// export default foodRouter;



import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import authMiddleware from "../middleware/auth.js"; // ✅ ADMIN AUTH

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const foodRouter = express.Router();

// ✅ Multer storage (SAFE for Windows)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });


// ===============================
// ✅ PUBLIC ROUTE (USERS CAN SEE)
// ===============================
foodRouter.get("/list", listFood);


// ========================================
// ✅ PROTECTED ROUTES (ADMIN ONLY)
// ========================================
foodRouter.post(
  "/add",
  authMiddleware,           // ✅ ADMIN TOKEN REQUIRED
  upload.single("image"),
  addFood
);

foodRouter.post(
  "/remove",
  authMiddleware,           // ✅ ADMIN TOKEN REQUIRED
  removeFood
);

export default foodRouter;
