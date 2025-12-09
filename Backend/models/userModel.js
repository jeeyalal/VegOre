// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     googleId: { type: String, required: true },
//     picture: { type: String, default: "" },
//     cartData: { type: Object, default: {} },
//   },
//   { 
//     minimize: false,
//     timestamps: true 
//   }
// );

// const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// export default userModel;










import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // ✅ Common Fields
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    // ✅ Google Login Fields (optional for admin)
    googleId: { type: String, default: "" },
    picture: { type: String, default: "" },

    // ✅ Admin Login Field (optional for normal user)
    password: { type: String, default: "" },

    // ✅ Role Control
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    cartData: { type: Object, default: {} },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
