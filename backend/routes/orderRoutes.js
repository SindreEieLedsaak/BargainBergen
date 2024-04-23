const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");


router.post("/cart/add", orderController.addItemToCart);
router.get("/cart", orderController.getCart);

module.exports = router;
