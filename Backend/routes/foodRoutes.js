import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import { authAdmin } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/list", listFood);
router.post("/add", authAdmin, upload.single("image"), addFood);
router.post("/remove", authAdmin, removeFood);

export default router;
