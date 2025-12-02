import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import Order from "../models/Order.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// @desc    Create Razorpay Order
// @route   POST /api/payments/create-order
// @access  Private
router.post("/create-order", protect, async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount in paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

// @desc    Verify Payment
// @route   POST /api/payments/verify
// @access  Private
router.post("/verify", protect, async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    orderData, // Details to save in DB
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Save order to DB
    try {
      const newOrder = new Order({
        user: req.user._id,
        userName: orderData.name,
        userPhone: orderData.phone,
        userEmail: orderData.email,
        address: orderData.address,
        items: orderData.items,
        totalAmount: orderData.amount,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        status: "Accepted", // Paid orders are automatically accepted/pending
      });

      await newOrder.save();

      res.json({
        success: true,
        message: "Payment verified and order saved",
        orderId: newOrder._id,
      });
    } catch (error) {
      console.error("Order Save Error:", error);
      res.status(500).json({ success: false, message: "Payment verified but order save failed" });
    }
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
});

export default router;
