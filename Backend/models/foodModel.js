

import mongoose from "mongoose";

const nutritionSchema = new mongoose.Schema({
  calories: { type: Number, required: true },
  protein: { type: String, required: true },
  carbs: { type: String, required: true },
  fat: { type: String, required: true }
}, { _id: false });

const foodSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  nutrition: { type: nutritionSchema, required: true },
  ingredients: { type: [String], required: true },
  section: { type: String, enum: ["normal", "vegan", "jain"], required: true },
  category: { type: String, enum: ["meals", "salads", "smoothies"], required: true }
}, { timestamps: true });

export default mongoose.models.food || mongoose.model("food", foodSchema);
