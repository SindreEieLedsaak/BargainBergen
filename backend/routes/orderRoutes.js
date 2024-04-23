const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const protect = require('../middleware/authMiddleware'); // Middleware to check if the user is logged in

router.post("/cart/add", protect, orderController.addItemToCart);
router.get("/cart", protect, orderController.getCart);

module.exports = router;

