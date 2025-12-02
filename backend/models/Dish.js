import mongoose from "mongoose";

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g. veg/jain/vegan
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Dish", DishSchema);
