const express = require("express");
const router = express.Router();
const verifyAdmin = require("../Middleware/verifyAdmin");
const {
  getDishes,
  addDish,
  updateDish,
  deleteDish
} = require("../controllers/dishController");

router.get("/", verifyAdmin, getDishes);
router.post("/", verifyAdmin, addDish);
router.put("/:id", verifyAdmin, updateDish);
router.delete("/:id", verifyAdmin, deleteDish);

module.exports = router;
