const router = require("express").Router();
const verifyAdmin = require("../Middleware/verifyAdmin");
const {
  getOrders,
  updateStatus,
  deleteOrder,
} = require("../controllers/orderController");

router.get("/", verifyAdmin, getOrders);
router.put("/:id", verifyAdmin, updateStatus);
router.delete("/:id", verifyAdmin, deleteOrder);

module.exports = router;
