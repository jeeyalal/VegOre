import express from "express";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc    Send OTP
// @route   POST /api/auth/send-otp
// @access  Public
router.post("/send-otp", async (req, res) => {
  const { mobile } = req.body;

  if (!mobile || mobile.length !== 10) {
    return res.status(400).json({ message: "Invalid mobile number" });
  }

  try {
    // Generate 4 digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    let user = await User.findOne({ mobile });

    if (!user) {
      user = await User.create({ mobile });
    }

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // MOCK OTP: Log to console
    console.log(`>>> OTP for ${mobile}: ${otp} <<<`);

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
// @access  Public
router.post("/verify-otp", async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    const user = await User.findOne({ mobile });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Clear OTP
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Google Auth
// @route   POST /api/auth/google
// @access  Public
router.post("/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { name, email, picture, sub: googleId } = ticket.getPayload();

    let user = await User.findOne({ email });

    if (user) {
      if (!user.googleId) {
        user.googleId = googleId;
        user.picture = picture;
        await user.save();
      }
    } else {
      // Create new user (Mobile is required, so we might need to handle this case carefully or make mobile optional for Google users)
      // For now, let's assume Google users might not have mobile set initially
      user = await User.create({
        name,
        email,
        googleId,
        picture,
        mobile: "0000000000", // Placeholder or handle differently
      });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(400).json({ message: "Google authentication failed" });
  }
});

export default router;
