const express = require("express");
const router = express.Router();
const clothingController = require("../../controllers/products/clothingController");
//const protect = require('../../middleware/authMiddleware'); // TODO: create protection middleware

// GET: Retrieve all clothing items
router.get("/", clothingController.getAllClothing);

// GET: Retrieve a specific clothing item by id
router.get("/:id", clothingController.getClothingById);

// POST: Create a new clothing listing
router.post("/", clothingController.createClothingListing);
//router.post('/', protect, createClothingListing); // Using the protect middleware to ensure only authenticated users can post

module.exports = router;
