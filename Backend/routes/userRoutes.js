

// import express from "express";
// import {
//   googleAuth,
//   registerAdmin,
//   loginAdmin,
//    getAddresses,
// } from "../controllers/userController.js";

// //this added///
// import { googleAuth, registerAdmin, loginAdmin, getAddresses } from "../controllers/userController.js";

// userRouter.get("/addresses", getAddresses);
// const userRouter = express.Router();

// // ✅ Google User Login
// userRouter.post("/google", googleAuth);

// // ✅ Admin Register (RUN ONCE)
// userRouter.post("/register-admin", registerAdmin);

// // ✅ Admin Login
// userRouter.post("/login-admin", loginAdmin);

// //this added///
// userRouter.get("/addresses", getAddresses);

// export default userRouter;










// Backend/routes/userRoutes.js
import express from "express";
import {
  googleAuth,
  registerAdmin,
  loginAdmin,
  getAddresses,
} from "../controllers/userController.js";

const userRouter = express.Router();

// ✅ Google User Login
userRouter.post("/google", googleAuth);

// ✅ Admin Register (RUN ONCE)
userRouter.post("/register-admin", registerAdmin);

// ✅ Admin Login
userRouter.post("/login-admin", loginAdmin);

// ✅ Get saved addresses
userRouter.get("/addresses", getAddresses);

export default userRouter;