




// import foodModel from "../models/foodModel.js";
// import fs from "fs";
// import path from "path";

// // ✅ ADD FOOD
// const addFood = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Image is required",
//       });
//     }

//     const food = new foodModel({
//       id: req.body.id,
//       name: req.body.name,
//       img: req.file.filename, // ✅ LOCAL FILE NAME
//       price: req.body.price,

//       nutrition: {
//         calories: req.body.calories,
//         protein: req.body.protein,
//         carbs: req.body.carbs,
//         fat: req.body.fat,
//       },

//       ingredients: JSON.parse(req.body.ingredients),
//       section: req.body.section,
//       category: req.body.category,
//     });

//     await food.save();

//     res.json({
//       success: true,
//       message: "✅ Food added successfully",
//       food,
//     });
//   } catch (error) {
//     console.error("ADD FOOD ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Add food failed",
//     });
//   }
// };

// // ✅ LIST FOOD
// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Failed to fetch food" });
//   }
// };

// // ✅ REMOVE FOOD
// // ✅ REMOVE FOOD
// const removeFood = async (req, res) => {
//   try {
//     const { id } = req.body;

//     const food = await foodModel.findById(id);
//     if (!food) {
//       return res.status(404).json({
//         success: false,
//         message: "Food not found",
//       });
//     }

//     // ✅ DELETE IMAGE
//     const imagePath = path.join("uploads", food.img);
//     if (fs.existsSync(imagePath)) {
//       fs.unlinkSync(imagePath);
//     }

//     await foodModel.findByIdAndDelete(id);

//     res.json({
//       success: true,
//       message: "✅ Food deleted successfully",
//     });
//   } catch (error) {
//     console.error("DELETE FOOD ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Delete failed",
//     });
//   }
// };

// export { addFood, listFood, removeFood };



import cloudinary from "../config/cloudinary.js";
import Food from "../models/foodModel.js";

export const addFood = async (req, res) => {
  try {
    const {
      id,
      name,
      price,
      calories,
      protein,
      carbs,
      fat,
      section,
      category,
      ingredients,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    // 🔥 Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "vegore_food",
    });

    const food = new Food({
      id,
      name,
      price,
      section,
      category,
      img: uploadResult.secure_url, // ✅ CLOUDINARY URL
      nutrition: { calories, protein, carbs, fat },
      ingredients: JSON.parse(ingredients),
    });

    await food.save();

    res.json({
      success: true,
      message: "Food added successfully",
      data: food,
    });
  } catch (error) {
    console.error("ADD FOOD ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};
