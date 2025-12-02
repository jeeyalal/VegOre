import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Link to User
    userName: String,
    userPhone: String,
    userEmail: String,
    address: String,

    items: [
      {
        name: String,
        price: Number,
        qty: Number,
        img: String,
      },
    ],

    totalAmount: Number,
    paymentId: String, // Razorpay Payment ID
    orderId: String,   // Razorpay Order ID

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Preparing", "Out for Delivery", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
