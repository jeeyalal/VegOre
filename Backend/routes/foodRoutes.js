

// import express from "express";
// import { addFood, listFood, removeFood } from "../controllers/foodController.js";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";
// import authMiddleware from "../middleware/auth.js"; // ✅ ADMIN AUTH

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


// // ===============================
// // ✅ PUBLIC ROUTE (USERS CAN SEE)
// // ===============================
// foodRouter.get("/list", listFood);


// // ========================================
// // ✅ PROTECTED ROUTES (ADMIN ONLY)
// // ========================================
// foodRouter.post(
//   "/add",
//   authMiddleware,           // ✅ ADMIN TOKEN REQUIRED
//   upload.single("image"),
//   addFood
// );

// foodRouter.post(
//   "/remove",
//   authMiddleware,           // ✅ ADMIN TOKEN REQUIRED
//   removeFood
// );

// export default foodRouter;







// import express from "express";
// import { addFood, listFood, removeFood } from "../controllers/foodController.js";
// import multer from "multer";
// import authMiddleware from "../middleware/auth.js";

// const foodRouter = express.Router();

// // ✅ MEMORY STORAGE (FOR CLOUDINARY)
// const upload = multer({ storage: multer.memoryStorage() });

// // ✅ PUBLIC
// foodRouter.get("/list", listFood);

// // ✅ ADMIN
// foodRouter.post(
//   "/add",
//   authMiddleware,
//   upload.single("image"),
//   addFood
// );

// foodRouter.post(
//   "/remove",
//   authMiddleware,
//   removeFood
// );

// export default foodRouter;







// import express from "express";
// import { addFood, listFood, removeFood } from "../controllers/foodController.js";
// import authMiddleware from "../middleware/auth.js";

// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "../config/cloudinary.js";

// const foodRouter = express.Router();

// // ✅ CLOUDINARY STORAGE
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "vegore",
//     allowed_formats: ["jpg", "png", "jpeg", "webp"],
//   },
// });

// const upload = multer({ storage });

// // ✅ PUBLIC
// foodRouter.get("/list", listFood);

// // ✅ ADMIN
// foodRouter.post("/add", authMiddleware, upload.single("image"), addFood);
// foodRouter.post("/remove", authMiddleware, removeFood);

// export default foodRouter;


// import express from "express";
// import { addFood, listFood, removeFood } from "../controllers/foodController.js";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";
// import authMiddleware from "../middleware/auth.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const foodRouter = express.Router();

// // ✅ MULTER LOCAL STORAGE
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../uploads"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // ✅ PUBLIC
// foodRouter.get("/list", listFood);

// // ✅ ADMIN PROTECTED
// foodRouter.post("/add", authMiddleware, upload.single("image"), addFood);
// foodRouter.post("/remove", authMiddleware, removeFood);

// export default foodRouter;
















// import express from "express";
// import { addFood, listFood, removeFood } from "../controllers/foodController.js";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";
// import { authAdmin } from "../middleware/auth.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const foodRouter = express.Router();

// // ✅ MULTER LOCAL STORAGE
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../uploads"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // ✅ PUBLIC ROUTE
// foodRouter.get("/list", listFood);

// // ✅ ADMIN PROTECTED ADD (keep secure)
// foodRouter.post("/add", authAdmin, upload.single("image"), addFood);

// // ✅ TEMP: UNPROTECTED DELETE (no auth → no more 401)
// foodRouter.post("/remove", authAdmin, removeFood);

// export default foodRouter;


import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import { authAdmin } from "../middleware/auth.js";

const foodRouter = express.Router();

// ===============================
// ✅ MULTER MEMORY STORAGE
// ===============================
const upload = multer({
  storage: multer.memoryStorage(),
});

// ===============================
// ROUTES
// ===============================
foodRouter.get("/list", listFood);

foodRouter.post(
  "/add",
  authAdmin,
  upload.single("image"),
  addFood
);

foodRouter.post(
  "/remove",
  authAdmin,
  removeFood
);

export default foodRouter;
