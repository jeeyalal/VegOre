import express from "express";
import {
  createSubscription,
  listSubscriptions,
  getUserSubscriptions,
  getSubscriptionById,
  updateSubscriptionStatus,
} from "../controllers/subscriptionController.js";
import { authAdmin, authUser } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", createSubscription);
router.get("/list", authAdmin, listSubscriptions);
router.get("/user", authUser, getUserSubscriptions);
router.get("/:id", getSubscriptionById);
router.patch("/:id/status", authAdmin, updateSubscriptionStatus);

export default router;
