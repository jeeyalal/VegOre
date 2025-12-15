// import SubscriptionModel from "../models/subscriptionModel.js";
// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";

// export const createSubscription = async (req, res) => {
//   try {
//     console.log('CREATE SUBS REQUEST BODY:', req.body)
//     const token = req.headers.token || req.headers.authorization?.split(" ")[1];
//     let userId;
//     if (token) {
//       try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         userId = decoded.id;
//       } catch (err) {
//         userId = undefined;
//       }
//     }

//     const {
//       planType,
//       planName,
//       duration,
//       dietType,
//       timeSlots,
//       selectedDishes,
//       specialNotes,
//       userDetails,
//       basePrice,
//       totalPrice,
//       payment,
//     } = req.body;

//     if (!selectedDishes || selectedDishes.length === 0) {
//       return res.status(400).json({ success: false, message: "Selected dishes required" });
//     }

//     const subscription = await SubscriptionModel.create({
//       user: userId,
//       planType,
//       planName,
//       duration,
//       dietType,
//       timeSlots,
//       selectedDishes,
//       specialNotes,
//       userDetails,
//       basePrice,
//       totalPrice,
//       paymentStatus: payment?.status || "pending",
//       orderId: payment?.orderId || `SUB${Date.now()}`,
//       payment,
//     });
//     console.log('SUBS CREATED:', subscription._id)

//     // Save address into user's addresses if logged in
//     if (userId && userDetails) {
//       const user = await userModel.findById(userId);
//       if (user) {
//         const addr = {
//           label: userDetails.label || "Home",
//           name: userDetails.name || user.name,
//           phone: userDetails.phone || user.phone,
//           line1: userDetails.address || "",
//           line2: userDetails.line2 || "",
//           city: userDetails.city || "",
//           state: userDetails.state || "",
//           postalCode: userDetails.pincode || userDetails.postalCode || "",
//           country: userDetails.country || "India",
//         };

//         const exists = user.addresses?.some((a) => a.line1 === addr.line1 && a.postalCode === addr.postalCode);
//         if (!exists) {
//           user.addresses.push(addr);
//           await user.save();
//         }
//       }
//     }

//     res.status(201).json({ success: true, subscription });
//   } catch (err) {
//     console.error("CREATE SUBS ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// export const listSubscriptions = async (req, res) => {
//   try {
//     // admin only
//     const subs = await SubscriptionModel.find({}).sort({ createdAt: -1 }).populate("user", "name email");
//     res.json({ success: true, data: subs });
//   } catch (err) {
//     console.error("LIST SUBS ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// export const getUserSubscriptions = async (req, res) => {
//   try {
//     const token = req.headers.token || req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ success: false, message: "Not authorized" });
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const subs = await SubscriptionModel.find({ user: decoded.id }).sort({ createdAt: -1 });
//     res.json({ success: true, data: subs });
//   } catch (err) {
//     console.error("GET USER SUBS ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// export const getSubscriptionById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const sub = await SubscriptionModel.findById(id).populate("user", "name email");
//     if (!sub) return res.status(404).json({ success: false, message: "Subscription not found" });
//     res.json({ success: true, data: sub });
//   } catch (err) {
//     console.error("GET SUB BY ID ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// export const updateSubscriptionStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status, paymentStatus } = req.body;
//     const updates = {};
//     if (status) updates.status = status;
//     if (paymentStatus) updates.paymentStatus = paymentStatus;

//     const sub = await SubscriptionModel.findByIdAndUpdate(id, updates, { new: true });
//     if (!sub) return res.status(404).json({ success: false, message: "Subscription not found" });
//     res.json({ success: true, data: sub });
//   } catch (err) {
//     console.error("UPDATE SUBS ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };












import SubscriptionModel from "../models/subscriptionModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// ===============================
// CREATE SUBSCRIPTION
// ===============================
export const createSubscription = async (req, res) => {
  try {
    console.log("CREATE SUBS REQUEST BODY:", req.body);

    let userId = null;

    // OPTIONAL USER AUTH
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (_) {}
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
      return res.status(400).json({
        success: false,
        message: "Selected dishes required",
      });
    }

    // 🔧 NORMALIZE DISH DATA
    const normalizedDishes = selectedDishes.map((d) => ({
      dishId: d._id || d.id,
      name: d.name,
      price: d.price,
      qty: d.qty || 1,
    }));

    const subscription = await SubscriptionModel.create({
      user: userId,
      planType,
      planName,
      duration,
      dietType,
      timeSlots,
      selectedDishes: normalizedDishes,
      specialNotes,
      userDetails,
      basePrice,
      totalPrice,
      paymentStatus: payment?.status === "success" ? "success" : "pending",
      orderId: payment?.orderId || `SUB${Date.now()}`,
      payment: payment || {},
    });

    console.log("SUBS CREATED:", subscription._id);

    // SAVE ADDRESS TO USER
    if (userId && userDetails) {
      const user = await userModel.findById(userId);
      if (user) {
        const addr = {
          label: "Home",
          name: userDetails.name,
          phone: userDetails.phone,
          line1: userDetails.address,
          city: userDetails.city,
          postalCode: userDetails.pincode,
          country: "India",
        };

        const exists = user.addresses?.some(
          (a) => a.line1 === addr.line1 && a.postalCode === addr.postalCode
        );

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

// ===============================
// ADMIN: LIST ALL SUBSCRIPTIONS
// ===============================
export const listSubscriptions = async (req, res) => {
  try {
    const subs = await SubscriptionModel.find({})
      .sort({ createdAt: -1 })
      .populate("user", "name email");

    res.json({ success: true, data: subs });
  } catch (err) {
    console.error("LIST SUBS ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// ===============================
// USER: GET OWN SUBSCRIPTIONS
// ===============================
export const getUserSubscriptions = async (req, res) => {
  try {
    const subs = await SubscriptionModel.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json({ success: true, data: subs });
  } catch (err) {
    console.error("GET USER SUBS ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// ===============================
// GET SUB BY ID
// ===============================
export const getSubscriptionById = async (req, res) => {
  try {
    const sub = await SubscriptionModel.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!sub)
      return res
        .status(404)
        .json({ success: false, message: "Subscription not found" });

    res.json({ success: true, data: sub });
  } catch (err) {
    console.error("GET SUB BY ID ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// ===============================
// ADMIN: UPDATE STATUS
// ===============================
export const updateSubscriptionStatus = async (req, res) => {
  try {
    const { status, paymentStatus } = req.body;

    const sub = await SubscriptionModel.findByIdAndUpdate(
      req.params.id,
      { status, paymentStatus },
      { new: true }
    );

    if (!sub)
      return res
        .status(404)
        .json({ success: false, message: "Subscription not found" });

    res.json({ success: true, data: sub });
  } catch (err) {
    console.error("UPDATE SUBS ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
