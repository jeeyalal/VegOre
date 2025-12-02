import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    mobile: { type: String, unique: true, sparse: true }, // Sparse allows multiple nulls
    otp: { type: String },
    otpExpires: { type: Date },
    googleId: { type: String },
    picture: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
