const Clothing = require("../../models/products/Clothing");

// Function to get all clothing items
const getAllClothing = async (req, res) => {
  try {
    const clothingItems = await Clothing.find({});
    res.status(200).json(clothingItems);
  } catch (error) {
    res.status(500).json({ message: "Error getting clothing items", error });
  }
};

module.exports = {
  getAllClothing,
};
