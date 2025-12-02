import express from "express";
import {
  getDishes,
  addDish,
  updateDish,
  deleteDish,
} from "../controllers/dishController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getDishes); // Public access to view dishes? Or protected? Assuming public for now.
router.post("/", protect, admin, addDish);
router.put("/:id", protect, admin, updateDish);
router.delete("/:id", protect, admin, deleteDish);

export default router;
