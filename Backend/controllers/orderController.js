// // Backend/controllers/orderController.js
// import OrderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";

// /**
//  * Create a new order
//  */
// export const createOrder = async (req, res) => {
//   try {
//     const token = req.headers.token || req.headers.authorization?.split(" ")[1];

//     let userId;
//     if (token) {
//       try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         userId = decoded.id;
//       } catch (err) {
//         // invalid token → continue without user
//         userId = undefined;
//       }
//     }

//     const { items, total, address, name, email, phone, payment } = req.body;

//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ success: false, message: "Cart items required" });
//     }
//     if (!total || total <= 0) {
//       return res.status(400).json({ success: false, message: "Total amount required" });
//     }
//     if (!address || !address.line1 || !address.city || !phone || !name || !email) {
//       return res.status(400).json({ success: false, message: "User address and contact required" });
//     }

//     const order = await OrderModel.create({
//       user: userId,
//       name,
//       email,
//       phone,
//       address,
//       items,
//       total,
//       paymentProvider: payment?.provider,
//       paymentId: payment?.id,
//       status: payment?.status === "paid" ? "paid" : "pending",
//     });

//     // Save address into user's addresses if logged in
//     if (userId) {
//       const user = await userModel.findById(userId);
//       if (user) {
//         // Avoid duplicate addresses
//         const exists = user.addresses?.some(
//           (ad) => ad.line1 === address.line1 && ad.postalCode === address.postalCode
//         );
//         if (!exists) {
//           user.addresses.push(address);
//           await user.save();
//         }
//       }
//     }

//     res.status(201).json({ success: true, order, message: "Order created" });
//   } catch (err) {
//     console.error("CREATE ORDER ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// export const listOrders = async (req, res) => {
//   try {
//     const token = req.headers.token || req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ success: false, message: "Not authorized" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.role !== "admin") return res.status(403).json({ success: false, message: "Admin access only" });

//     const orders = await OrderModel.find({}).sort({ createdAt: -1 }).populate("user", "name email");
//     res.json({ success: true, data: orders });
//   } catch (err) {
//     console.error("LIST ORDERS ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// export const getOrdersForUser = async (req, res) => {
//   try {
//     const token = req.headers.token || req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ success: false, message: "Not authorized" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const orders = await OrderModel.find({ user: decoded.id }).sort({ createdAt: -1 });
//     res.json({ success: true, data: orders });
//   } catch (err) {
//     console.error("GET USER ORDERS ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };





import OrderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// ===============================
// CREATE ORDER
// ===============================
export const createOrder = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    let userId;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch {
        userId = undefined;
      }
    }

    const { items, total, address, name, email, phone, payment } = req.body;

    if (!items?.length)
      return res.status(400).json({ success: false, message: "Cart items required" });

    if (!total || total <= 0)
      return res.status(400).json({ success: false, message: "Total required" });

    if (!address || !name || !email || !phone)
      return res.status(400).json({ success: false, message: "Address & contact required" });

    const order = await OrderModel.create({
      user: userId,
      name,
      email,
      phone,
      address,
      items,
      total,
      paymentProvider: payment?.provider,
      paymentId: payment?.id,
      status: payment?.status === "paid" ? "paid" : "pending",
    });

    // Save address to user profile
    if (userId) {
      const user = await userModel.findById(userId);
      if (user) {
        const exists = user.addresses?.some(
          (ad) => ad.line1 === address.line1 && ad.postalCode === address.postalCode
        );
        if (!exists) {
          user.addresses.push(address);
          await user.save();
        }
      }
    }

    res.status(201).json({ success: true, order });
  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    res.status(500).json({ success: false, message: "Order creation failed" });
  }
};

// ===============================
// LIST ORDERS (ADMIN)
// ===============================
export const listOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({})
      .sort({ createdAt: -1 })
      .populate("user", "name email");

    res.json({ success: true, data: orders });
  } catch (err) {
    console.error("LIST ORDERS ERROR:", err);
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
};

// ===============================
// USER ORDERS
// ===============================
export const getOrdersForUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ success: false, message: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const orders = await OrderModel.find({ user: decoded.id }).sort({ createdAt: -1 });

    res.json({ success: true, data: orders });
  } catch (err) {
    console.error("GET USER ORDERS ERROR:", err);
    res.status(500).json({ success: false, message: "Failed to fetch user orders" });
  }
};

// ===============================
// ✅ REMOVE ORDER (ADMIN)
// ===============================
export const removeOrder = async (req, res) => {
  try {
    const { id } = req.body;

    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    await OrderModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (err) {
    console.error("REMOVE ORDER ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Failed to delete order",
    });
  }
};
