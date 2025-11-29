import express from "express";
import { adminLogin } from "../controllers/AdminAuthController.js";

const router = express.Router();

router.post("/login", adminLogin);

export default router;
