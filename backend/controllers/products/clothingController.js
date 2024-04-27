const Clothing = require("../../models/products/Clothing");

// Function to get all clothing items or filter by category
const getClothing = async (req, res) => {
  const { sellerID, category } = req.query;
  let query = {};

  if (category) {
    query.category = category;
  }
  if (sellerID) {
    query.sellerID = sellerID;
  }

  try {
    const clothingItems = await Clothing.find(query);
    if (clothingItems.length === 0) {
      return res.status(404).json({ message: "No clothing items found" });
    }
    res.status(200).json(clothingItems);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving clothing items", error });
  }
};

const createClothingListing = async (req, res) => {
  console.log("Received data:", req.body);

  try {
    const {
      header,
      price,
      size,
      color,
      description,
      sellerName,
      sellerID,
      category,
      image,
      address,
    } = req.body;
    // const sellerID = req.body.sellerID; //req.user._id; // TODO: set req.user in an authentication middleware

    const newClothing = new Clothing({
      header,
      price,
      size,
      color,
      category,
      description,
      sellerName,
      sellerID,
      img: image,
      address,
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
  getClothing,
  createClothingListing,
  getClothingById,
};
