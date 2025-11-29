const Order = require("../models/Order");

// GET ALL ORDERS
exports.getOrders = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json({ success: true, orders });
};

// UPDATE ORDER STATUS
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  await Order.findByIdAndUpdate(id, { status });

  res.json({ success: true, message: "Order status updated" });
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  await Order.findByIdAndDelete(id);

  res.json({ success: true, message: "Order deleted" });
};
