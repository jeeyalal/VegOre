import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// ✅ Add Food
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const food = new foodModel({
      id: req.body.id,
      name: req.body.name,
      img: req.file.filename,
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

// ✅ Get All Food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log("LIST FOOD ERROR:", error);
    res.status(500).json({ success: false, message: "error" });
  }
};

// ✅ Remove Food (FIXED)
const removeFood = async (req, res) => {
  try {
    const { id } = req.body; // ✅ correct

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Food ID is required",
      });
    }

    // ✅ Find by YOUR custom id field
    const food = await foodModel.findOne({ id });

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    // ✅ Delete image from uploads folder
    const imagePath = path.join("uploads", food.img);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // ✅ Delete from database
    await foodModel.deleteOne({ id });

    res.json({
      success: true,
      message: "✅ Food removed successfully",
    });
  } catch (error) {
    console.log("REMOVE FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "error",
    });
  }
};

export { addFood, listFood, removeFood };
