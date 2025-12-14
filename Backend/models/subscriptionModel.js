import mongoose from "mongoose";

const dishItemSchema = new mongoose.Schema(
  {
    dishId: { type: mongoose.Schema.Types.ObjectId, ref: "food" },
    name: String,
    price: Number,
    qty: { type: Number, default: 1 },
  },
  { _id: false }
);

const subscriptionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
    planType: String,
    planName: String,
    duration: Number,
    dietType: String,
    timeSlots: [String],
    selectedDishes: [dishItemSchema],
    specialNotes: String,
    userDetails: {
      name: String,
      email: String,
      phone: String,
      address: String,
      city: String,
      pincode: String,
      landmark: String,
      label: String,
    },
    basePrice: Number,
    totalPrice: Number,
    paymentStatus: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
    orderId: String,
    payment: { type: Object, default: {} },
    status: { type: String, enum: ["active", "cancelled", "completed"], default: "active" },
  },
  { timestamps: true }
);

export default mongoose.models.Subscription || mongoose.model("subscription", subscriptionSchema);
