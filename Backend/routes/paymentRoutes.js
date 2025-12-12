import express from 'express';
import { createOrder, verifyPaymentAndCreateSubscription, razorpayWebhook } from '../controllers/paymentController.js';
import { authUser } from '../middleware/auth.js';

const router = express.Router();

// create razorpay order
router.post('/create-order', authUser, createOrder);

// verify payment and create subscription record
router.post('/verify', authUser, verifyPaymentAndCreateSubscription);

// public webhook for razorpay events
router.post('/webhook', express.json({ type: '*/*' }), razorpayWebhook);

export default router;
