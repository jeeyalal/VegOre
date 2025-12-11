




import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    label: String,
    name: String,
    phone: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    googleId: { type: String, default: "" },
    picture: { type: String, default: "" },

    password: { type: String, default: "" },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    addresses: {
      type: [addressSchema],
      default: [],
    },

    cartData: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.user || mongoose.model("user", userSchema);


