import Razorpay from 'razorpay';
import crypto from 'crypto';
import SubscriptionModel from '../models/subscriptionModel.js';
import userModel from '../models/userModel.js';
import OrderModel from '../models/orderModel.js';

const razorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) return null;
  return new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
}

export const createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;
    const rz = razorpayInstance();
    if (!rz) return res.status(500).json({ success: false, message: 'Razorpay not configured' });

    const options = {
      amount: Math.round(Number(amount) * 100), // amount in paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await rz.orders.create(options);
    return res.json({ success: true, order, key: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error('CREATE ORDER ERROR', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}

export const verifyPaymentAndCreateSubscription = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, subscriptionData, orderData } = req.body;
    // verify signature
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) return res.status(500).json({ success: false, message: 'Razorpay not configured' });

    const hmac = crypto.createHmac('sha256', secret).update(razorpay_order_id + '|' + razorpay_payment_id).digest('hex');
    if (hmac !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid signature' });
    }

    // signature valid -- create subscription record
    const token = req.headers.token || req.headers.authorization?.split(' ')[1];
    let userId;
    if (token) {
      try {
        const jwt = (await import('jsonwebtoken')).default;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (err) {
        userId = undefined;
      }
    }

    // If orderData exists, create an Order instead of Subscription
    if (orderData) {
      const { items, total, address, name, email, phone } = orderData;
      const order = await OrderModel.create({
        user: userId,
        name,
        email,
        phone,
        address,
        items,
        total,
        paymentProvider: 'razorpay',
        paymentId: razorpay_payment_id,
        status: 'paid',
      });

      // Save address to user if logged in
      if (userId && address) {
        const user = await userModel.findById(userId);
        if (user) {
          const exists = user.addresses?.some((a) => a.line1 === address.line1 && a.postalCode === address.postalCode);
          if (!exists) {
            user.addresses.push(address);
            await user.save();
          }
        }
      }

      return res.status(201).json({ success: true, order });
    }

    const { planType, planName, duration, dietType, timeSlots, selectedDishes, specialNotes, userDetails, basePrice, totalPrice } = subscriptionData || {};

    const subscription = await SubscriptionModel.create({
      user: userId,
      planType,
      planName,
      duration,
      dietType,
      timeSlots,
      selectedDishes,
      specialNotes,
      userDetails,
      basePrice,
      totalPrice,
      paymentStatus: 'success',
      orderId: razorpay_order_id,
      payment: { provider: 'razorpay', orderId: razorpay_order_id, paymentId: razorpay_payment_id, signature: razorpay_signature },
    });

    // Save address to user if logged in
    if (userId && userDetails) {
      const user = await userModel.findById(userId);
      if (user) {
        const addr = {
          label: userDetails.label || 'Home',
          name: userDetails.name || user.name,
          phone: userDetails.phone || user.phone,
          line1: userDetails.address || '',
          line2: userDetails.line2 || '',
          city: userDetails.city || '',
          state: userDetails.state || '',
          postalCode: userDetails.pincode || userDetails.postalCode || '',
          country: userDetails.country || 'India',
        };
        const exists = user.addresses?.some((a) => a.line1 === addr.line1 && a.postalCode === addr.postalCode);
        if (!exists) {
          user.addresses.push(addr);
          await user.save();
        }
      }
    }

    return res.status(201).json({ success: true, subscription });
  } catch (err) {
    console.error('VERIFY PAYMENT ERROR', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}

export const razorpayWebhook = async (req, res) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'];
    if (!webhookSecret || !signature) return res.status(400).send('Invalid request');
    // Raw buffer should be available on req.body because we used express.raw in the router
    const body = req.body instanceof Buffer ? req.body.toString('utf8') : JSON.stringify(req.body);
    const hmac = crypto.createHmac('sha256', webhookSecret).update(body).digest('hex');
    if (hmac !== signature) {
      console.warn('Invalid webhook signature');
      return res.status(400).send('Invalid signature');
    }

    const event = JSON.parse(body)?.event;
    const payload = JSON.parse(body)?.payload;
    // Update subscription based on event
    if (event && payload) {
      if (event === 'payment.captured' || event === 'payment.failed') {
        const paymentEntity = payload.payment?.entity;
        const rzOrderId = paymentEntity?.order_id;
        const paymentId = paymentEntity?.id;
        if (rzOrderId) {
          const subs = await SubscriptionModel.findOne({ orderId: rzOrderId });
          if (subs) {
            const newPayStatus = event === 'payment.captured' ? 'success' : 'failed';
            subs.paymentStatus = newPayStatus;
            subs.payment = subs.payment || {};
            subs.payment.provider = 'razorpay';
            subs.payment.orderId = rzOrderId;
            subs.payment.paymentId = paymentId;
            await subs.save();
          }
        }
      }
    }
    console.log('RAZORPAY WEBHOOK EVENT', event);
    return res.status(200).send('ok');
  } catch (err) {
    console.error('WEBHOOK ERROR', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
