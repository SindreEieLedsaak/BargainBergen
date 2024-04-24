const Clothing = require("../../models/products/Clothing");

// Function to get all clothing items or filter by category
const getAllClothing = async (req, res) => {
  const category = req.query.category;
  const query = category ? { category: category } : {}; // If category exists, use it in the query, otherwise fetch all

  try {
    const clothingItems = await Clothing.find(query);
    res.status(200).json(clothingItems);
  } catch (error) {
    res.status(500).json({ message: "Error getting clothing items", error });
  }
};

const createClothingListing = async (req, res) => {
  try {
    const { header, price, size, color, description, sellerName, category } =
      req.body;
    const sellerID = req.body.sellerID; //req.user._id; // TODO: set req.user in an authentication middleware

    const newClothing = new Clothing({
      header,
      price,
      size,
      color,
      category,
      description,
      sellerName,
      sellerID,
    });

    await newClothing.save();
    res.status(201).json(newClothing);
  } catch (error) {
    res.status(400).json({ message: "Error creating clothing listing", error });
  }
};

const getClothingById = async (req, res) => {
  try {
    console.log(req.params);
    const clothingItem = await Clothing.findById(req.params.id);
    if (!clothingItem) {
      return res.status(404).json({ message: "Clothing item not found" });
    }
    res.status(200).json(clothingItem);
  } catch (error) {
    res.status(500).json({ message: "Error getting the clothing item", error });
  }
};

module.exports = {
  getAllClothing,
  createClothingListing,
  getClothingById,
};
