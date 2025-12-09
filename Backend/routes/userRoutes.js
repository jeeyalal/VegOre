
// import express from "express";
// import { googleAuth } from "../controllers/userController.js";

// const userRouter = express.Router();

// // Google authentication route
// userRouter.post("/google", googleAuth);

// export default userRouter;


// import express from "express";
// import {
//   googleAuth,
//   registerAdmin,
//   loginAdmin,
// } from "../controllers/userController.js";

// const userRouter = express.Router();

// // ✅ Google User Login
// userRouter.post("/google", googleAuth);

// // ✅ Admin Register (RUN ONCE)
// userRouter.post("/register-admin", registerAdmin);

// // ✅ Admin Login
// userRouter.post("/login-admin", loginAdmin);

// export default userRouter;


import express from "express";
import {
  googleAuth,
  registerAdmin,
  loginAdmin,
} from "../controllers/userController.js";

const userRouter = express.Router();

// ✅ Google User Login
userRouter.post("/google", googleAuth);

// ✅ Admin Register (RUN ONCE)
userRouter.post("/register-admin", registerAdmin);

// ✅ Admin Login
userRouter.post("/login-admin", loginAdmin);

export default userRouter;
