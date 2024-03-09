const express = require("express");
const router = express.Router();
const clothingController = require("../../controllers/products/clothingController");

// GET: Retrieve all clothing items
router.get("/", clothingController.getAllClothing);

module.exports = router;
