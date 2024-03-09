const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
  // Defining the schema for the clothing collection
  name: String,
  price: Number,
  size: [String],
  color: [String],
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;
