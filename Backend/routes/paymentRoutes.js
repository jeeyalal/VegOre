import express from 'express';
import { createOrder, verifyPaymentAndCreateSubscription, razorpayWebhook } from '../controllers/paymentController.js';
import { authUser } from '../middleware/auth.js';

const router = express.Router();

// create razorpay order
router.post('/create-order', authUser, createOrder);

// ping endpoint to check router mount
router.get('/ping', (req, res) => res.json({ ok: true }));

// verify payment and create subscription record
router.post('/verify', authUser, verifyPaymentAndCreateSubscription);

// public webhook for razorpay events
// use raw body parser for webhook signature verification
router.post('/webhook', express.raw({ type: 'application/json' }), razorpayWebhook);

export default router;
