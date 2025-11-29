const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
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

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Preparing", "Out for Delivery", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
