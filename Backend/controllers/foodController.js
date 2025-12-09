
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
//       img: req.file.filename, // ✅ FIELD IS img
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



// import foodModel from "../models/foodModel.js";

// // ✅ ADD FOOD — CLOUDINARY IMAGE
// const addFood = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ success: false, message: "Image is required" });
//     }

//     const food = new foodModel({
//       id: req.body.id,
//       name: req.body.name,
//       img: req.file.path, // ✅ CLOUDINARY FULL URL
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

//     res.status(201).json({
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
//     console.error("LIST FOOD ERROR:", error);
//     res.status(500).json({ success: false, message: "Fetch failed" });
//   }
// };

// // ✅ REMOVE FOOD
// const removeFood = async (req, res) => {
//   try {
//     const { id } = req.body;
//     const food = await foodModel.findById(id);

//     if (!food) {
//       return res.status(404).json({ success: false, message: "Food not found" });
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


// import foodModel from "../models/foodModel.js";
// import cloudinary from "../config/cloudinary.js";

// // ✅ ADD FOOD (CLOUDINARY)
// const addFood = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Image is required",
//       });
//     }

//     // ✅ Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(
//       `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
//       { folder: "vegore" }
//     );

//     const food = new foodModel({
//       id: req.body.id,
//       name: req.body.name,
//       img: result.secure_url, // ✅ CLOUDINARY URL
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

//     res.status(201).json({
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
//     console.error("LIST FOOD ERROR:", error);
//     res.status(500).json({ success: false, message: "Fetch failed" });
//   }
// };

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

//     // ✅ Delete DB record (Cloudinary auto keeps image unless you want to delete it)
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




















import foodModel from "../models/foodModel.js";

// ✅ ADD FOOD — CLOUDINARY
const addFood = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const food = new foodModel({
      id: req.body.id,
      name: req.body.name,
      img: req.file.path,   // ✅ CLOUDINARY URL
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

// ✅ LIST FOOD
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fetch failed" });
  }
};

// ✅ REMOVE FOOD
const removeFood = async (req, res) => {
  try {
    const { id } = req.body;

    const food = await foodModel.findById(id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    await foodModel.findByIdAndDelete(id);

    res.json({ success: true, message: "✅ Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Delete failed" });
  }
};

export { addFood, listFood, removeFood };
