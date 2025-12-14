
// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import { OAuth2Client } from "google-auth-library";

// // ✅ Initialize Google OAuth Client
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // ============================
// // ✅ TOKEN GENERATOR
// // ============================
// const createToken = (id, role) => {
//   return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// // ============================
// // ✅ GOOGLE LOGIN (IMPROVED WITH google-auth-library)
// // ============================
// const googleAuth = async (req, res) => {
//   const { credential } = req.body;

//   try {
//     console.log("🔍 === GOOGLE AUTH REQUEST ===");
//     console.log("Credential received:", credential ? "Yes" : "No");
//     console.log("Client ID configured:", process.env.GOOGLE_CLIENT_ID ? "Yes" : "No");

//     if (!credential) {
//       console.error("❌ No credential provided");
//       return res.status(400).json({
//         success: false,
//         message: "No credential provided",
//       });
//     }

//     // ✅ Verify Google Token using official library
//     console.log("🔐 Verifying Google token...");
//     const ticket = await client.verifyIdToken({
//       idToken: credential,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     console.log("✅ Token verified successfully");
//     console.log("User email:", payload.email);

//     const { email, name, sub, picture } = payload;

//     if (!email || !name) {
//       console.error("❌ Invalid token payload - missing email or name");
//       return res.status(400).json({
//         success: false,
//         message: "Invalid Google token - missing required fields",
//       });
//     }

//     // ✅ Check if user exists
//     let user = await userModel.findOne({ email });

//     if (!user) {
//       console.log("👤 Creating new user:", email);
//       user = await userModel.create({
//         name,
//         email,
//         googleId: sub,
//         picture,
//         role: "user",
//       });
//       console.log("✅ New user created with ID:", user._id);
//     } else {
//       console.log("👤 Existing user found:", email);
//       // Update picture if changed
//       if (!user.picture || user.picture !== picture) {
//         user.picture = picture;
//         user.googleId = sub; // Update googleId if missing
//         await user.save();
//         console.log("✅ User profile updated");
//       }
//     }

//     // ✅ Generate JWT Token
//     const token = createToken(user._id, user.role);
//     console.log("✅ JWT token generated");

//     console.log("✅ === LOGIN SUCCESSFUL ===");
//     console.log("User ID:", user._id);
//     console.log("User Email:", user.email);
//     console.log("User Role:", user.role);

//     res.json({
//       success: true,
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         picture: user.picture,
//         role: user.role,
//       },
//       message: "Login successful",
//     });
//   } catch (err) {
//     console.error("❌ === GOOGLE AUTH ERROR ===");
//     console.error("Error type:", err.name);
//     console.error("Error message:", err.message);
//     console.error("Full error:", err);

//     // Detailed error response
//     let errorMessage = "Google login failed";
//     let statusCode = 400;

//     if (err.message?.includes("Token used too late")) {
//       errorMessage = "Login token expired. Please try again.";
//     } else if (err.message?.includes("Invalid token")) {
//       errorMessage = "Invalid Google token. Please try again.";
//     } else if (err.message?.includes("audience")) {
//       errorMessage = "Authentication configuration error. Please contact support.";
//       statusCode = 500;
//     } else if (err.name === "MongoError" || err.name === "MongoServerError") {
//       errorMessage = "Database error. Please try again later.";
//       statusCode = 500;
//     }

//     res.status(statusCode).json({
//       success: false,
//       message: errorMessage,
//       error: process.env.NODE_ENV === "development" ? err.message : undefined,
//     });
//   }
// };

// // ============================
// // ✅ ADMIN REGISTER (RUN ONCE)
// // ============================
// const registerAdmin = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields required",
//       });
//     }

//     const exists = await userModel.findOne({ email });
//     if (exists) {
//       return res.status(400).json({
//         success: false,
//         message: "Admin already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const admin = await userModel.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: "admin",
//     });

//     const token = createToken(admin._id, admin.role);

//     res.status(201).json({
//       success: true,
//       message: "Admin registered successfully",
//       token,
//       admin: {
//         id: admin._id,
//         email: admin.email,
//         role: admin.role,
//       },
//     });
//   } catch (error) {
//     console.error("ADMIN REGISTER ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ============================
// // ✅ ADMIN LOGIN
// // ============================
// const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Email and password required",
//       });
//     }

//     const admin = await userModel.findOne({ email, role: "admin" });
//     if (!admin) {
//       return res.status(404).json({
//         success: false,
//         message: "Admin not found",
//       });
//     }

//     if (!admin.password) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid admin account",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid password",
//       });
//     }

//     const token = createToken(admin._id, admin.role);

//     res.json({
//       success: true,
//       token,
//       message: "Admin login successful",
//       admin: {
//         id: admin._id,
//         email: admin.email,
//         role: admin.role,
//       },
//     });
//   } catch (error) {
//     console.error("ADMIN LOGIN ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export { googleAuth, registerAdmin, loginAdmin };





//12/11/2025 edit






// Backend/controllers/userController.js
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const createToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// =======================
// GOOGLE LOGIN
// =======================
const googleAuth = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ success: false, message: "Missing credential" });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub, picture } = payload;

    if (!email) {
      return res.status(400).json({ success: false, message: "Invalid Google token" });
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      user = await userModel.create({
        name,
        email,
        googleId: sub,
        picture,
        role: "user",
      });
    } else {
      if (user.picture !== picture) {
        user.picture = picture;
        await user.save();
      }
    }

    const token = createToken(user._id, user.role);

    res.json({
      success: true,
      token,
      user,
      message: "Login successful",
    });
  } catch (err) {
    // More detailed logging might be helpful during development
    res.status(400).json({
      success: false,
      message: "Google login failed",
      error: err.message,
    });
  }
};

// =======================
// ADMIN REGISTER
// =======================
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: "All fields required" });

    const exists = await userModel.findOne({ email });
    if (exists)
      return res.status(400).json({ success: false, message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    const token = createToken(admin._id, admin.role);

    res.json({ success: true, token, admin });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// =======================
// ADMIN LOGIN
// =======================
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ success: false, message: "Email & password required" });

    const admin = await userModel.findOne({ email, role: "admin" });
    if (!admin)
      return res.status(404).json({ success: false, message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match)
      return res.status(401).json({ success: false, message: "Invalid password" });

    const token = createToken(admin._id, admin.role);

    res.json({
      success: true,
      token,
      admin,
      message: "Admin login successful",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// =======================
// Get saved addresses for logged-in user
// =======================
const getAddresses = async (req, res) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id).select("addresses");

    res.json({ success: true, addresses: user?.addresses || [] });
  } catch (err) {
    console.error("GET ADDRESSES ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export { googleAuth, registerAdmin, loginAdmin, getAddresses };