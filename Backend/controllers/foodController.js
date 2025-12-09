import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// ✅ ✅ ✅ ADD FOOD
const addFood = async (req, res) => {
  try {
    console.log("REQ.FILE =>", req.file);
    console.log("REQ.BODY =>", req.body);

    // ✅ Safety check
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const food = new foodModel({
      id: req.body.id,
      name: req.body.name,

      // ✅ IMAGE FIELD MUST MATCH FRONTEND (`image`)
      image: req.file.filename,

      price: req.body.price,

      nutrition: {
        calories: req.body.calories,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fat: req.body.fat,
      },

      ingredients: JSON.parse(req.body.ingredients),
      section: req.body.section,
      category: req.body.category,
    });

    await food.save();

    res.status(201).json({
      success: true,
      message: "✅ Food added successfully",
      food,
    });
  } catch (error) {
    console.log("ADD FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Error adding food",
    });
  }
};


// ✅ ✅ ✅ LIST FOOD
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log("LIST FOOD ERROR:", error);
    res.json({ success: false, message: "Failed to fetch food" });
  }
};


// ✅ ✅ ✅ REMOVE FOOD (FINAL FIXED VERSION)
const removeFood = async (req, res) => {
  try {
    const { id } = req.body;

    // ✅ Find using MongoDB _id
    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    // ✅ Delete image from uploads folder
    const imagePath = path.join("uploads", food.image);

    fs.unlink(imagePath, (err) => {
      if (err) console.log("Image delete error:", err);
    });

    // ✅ Delete from database
    await foodModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "✅ Food removed successfully",
    });
  } catch (error) {
    console.log("REMOVE FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};

export { addFood, listFood, removeFood };
