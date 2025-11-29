import express from "express";
import { getMessages } from "../controllers/contactController.js";
const router = express.Router();

router.get("/", getMessages);

export default router;
