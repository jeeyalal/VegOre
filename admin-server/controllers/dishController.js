import Dish from "../models/Dish.js";

export const getDishes = async (req, res) => {
  const dishes = await Dish.find().sort({ createdAt: -1 });
  res.json(dishes);
};

export const addDish = async (req, res) => {
  try {
    const dish = new Dish(req.body);
    await dish.save();
    res.json({ success: true, message: "Dish added", dish });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error adding dish" });
  }
};

export const updateDish = async (req, res) => {
  try {
    const updated = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, updated });
  } catch {
    res.status(400).json({ success: false, message: "Error updating dish" });
  }
};

export const deleteDish = async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Dish deleted" });
  } catch {
    res.status(400).json({ success: false, message: "Error deleting dish" });
  }
};
