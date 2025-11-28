import { Router } from "express";
import { razorpay } from "./razorpay.js";
import crypto from "crypto";

const router = Router();

// CREATE ORDER
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// VERIFY PAYMENT
router.post("/verify-payment", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    let generatedSignature = hmac.digest("hex");

    if (generatedSignature === razorpay_signature) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
