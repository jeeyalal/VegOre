// Backend/routes/orderRoutes.js
import express from "express";
import { createOrder, listOrders, getOrdersForUser } from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/list", listOrders);  // Admin only
router.get("/user", getOrdersForUser); // Authenticated user

export default router;