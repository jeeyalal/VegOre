
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