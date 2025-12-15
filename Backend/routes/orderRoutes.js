// // Backend/routes/orderRoutes.js
// import express from "express";
// import { createOrder, listOrders, getOrdersForUser } from "../controllers/orderController.js";

// const router = express.Router();

// router.post("/create", createOrder);
// router.get("/list", listOrders);  // Admin only
// router.get("/user", getOrdersForUser); // Authenticated user

// export default router;


// // Backend/routes/orderRoutes.js
// import express from "express";
// import {
//   createOrder,
//   listOrders,
//   getOrdersForUser,
//   removeOrder, // ✅ ADD
// } from "../controllers/orderController.js";

// import { authAdmin } from "../middleware/auth.js";


// import { authUser } from "../middleware/auth.js";

// const router = express.Router();

// // Create order (public / user)
// router.post("/create", createOrder);

// // Admin: list all orders
// router.get("/list", authAdmin, listOrders);

// // User: get own orders
// router.get("/user", getOrdersForUser);

// // ✅ Admin: delete order
// router.post("/remove", authAdmin, removeOrder);

// export default router;



















// Backend/routes/orderRoutes.js
import express from "express";
import {
  createOrder,
  listOrders,
  getOrdersForUser,
  removeOrder, // ✅ ADD
} from "../controllers/orderController.js";

import { authAdmin } from "../middleware/auth.js";


import { authUser } from "../middleware/auth.js";

const router = express.Router();

// Create order (public / user)
router.post("/create", authUser, createOrder);   // 🔐 REQUIRED
router.get("/user", authUser, getOrdersForUser); 
// Admin: list all orders
router.get("/list", authAdmin, listOrders);

// User: get own orders

// ✅ Admin: delete order
router.post("/remove", authAdmin, removeOrder);

export default router;
