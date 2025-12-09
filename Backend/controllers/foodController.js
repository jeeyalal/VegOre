import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// ✅=========================
// ✅ ADD FOOD (ADMIN)
// ✅=========================
const addFood = async (req, res) => {
  try {
    console.log("REQ.FILE =>", req.file);
    console.log("REQ.BODY =>", req.body);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const food = new foodModel({
      id: req.body.id,
      name: req.body.name,
      img: req.file.filename, // ✅ CORRECT IMAGE FIELD
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
    console.error("ADD FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Add food failed",
    });
  }
};

// ✅=========================
// ✅ LIST FOOD (PUBLIC)
// ✅=========================
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    console.error("LIST FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch food",
    });
  }
};

// ✅=========================
// ✅ REMOVE FOOD (ADMIN)
// ✅=========================
const removeFood = async (req, res) => {
  try {
    const { id } = req.body;

    // ✅ FIND BY MONGO _id
    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    // ✅ DELETE IMAGE FILE SAFELY
    const imagePath = path.join("uploads", food.img);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // ✅ DELETE DB RECORD
    await foodModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "✅ Food deleted successfully",
    });
  } catch (error) {
    console.error("DELETE FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};

export { addFood, listFood, removeFood };
