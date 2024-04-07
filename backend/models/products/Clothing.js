const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
  // Defining the schema for the clothing collection
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: false },
  color: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;
