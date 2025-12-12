import SubscriptionModel from "../models/subscriptionModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const createSubscription = async (req, res) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];
    let userId;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (err) {
        userId = undefined;
      }
    }

    const {
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
      payment,
    } = req.body;

    if (!selectedDishes || selectedDishes.length === 0) {
      return res.status(400).json({ success: false, message: "Selected dishes required" });
    }

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
      paymentStatus: payment?.status || "pending",
      orderId: payment?.orderId || `SUB${Date.now()}`,
      payment,
    });

    // Save address into user's addresses if logged in
    if (userId && userDetails) {
      const user = await userModel.findById(userId);
      if (user) {
        const addr = {
          label: userDetails.label || "Home",
          name: userDetails.name || user.name,
          phone: userDetails.phone || user.phone,
          line1: userDetails.address || "",
          line2: userDetails.line2 || "",
          city: userDetails.city || "",
          state: userDetails.state || "",
          postalCode: userDetails.pincode || userDetails.postalCode || "",
          country: userDetails.country || "India",
        };

        const exists = user.addresses?.some((a) => a.line1 === addr.line1 && a.postalCode === addr.postalCode);
        if (!exists) {
          user.addresses.push(addr);
          await user.save();
        }
      }
    }

    res.status(201).json({ success: true, subscription });
  } catch (err) {
    console.error("CREATE SUBS ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const listSubscriptions = async (req, res) => {
  try {
    // admin only
    const subs = await SubscriptionModel.find({}).sort({ createdAt: -1 }).populate("user", "name email");
    res.json({ success: true, data: subs });
  } catch (err) {
    console.error("LIST SUBS ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getUserSubscriptions = async (req, res) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "Not authorized" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const subs = await SubscriptionModel.find({ user: decoded.id }).sort({ createdAt: -1 });
    res.json({ success: true, data: subs });
  } catch (err) {
    console.error("GET USER SUBS ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getSubscriptionById = async (req, res) => {
  try {
    const { id } = req.params;
    const sub = await SubscriptionModel.findById(id).populate("user", "name email");
    if (!sub) return res.status(404).json({ success: false, message: "Subscription not found" });
    res.json({ success: true, data: sub });
  } catch (err) {
    console.error("GET SUB BY ID ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateSubscriptionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, paymentStatus } = req.body;
    const updates = {};
    if (status) updates.status = status;
    if (paymentStatus) updates.paymentStatus = paymentStatus;

    const sub = await SubscriptionModel.findByIdAndUpdate(id, updates, { new: true });
    if (!sub) return res.status(404).json({ success: false, message: "Subscription not found" });
    res.json({ success: true, data: sub });
  } catch (err) {
    console.error("UPDATE SUBS ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
