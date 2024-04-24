const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
  header: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: false },
  color: { type: String, required: false },
  description: { type: String, required: false },
  sellerName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // TODO: USE THIS WHEN NOT TESTING: sellerID: {  type: mongoose.Schema.Types.ObjectId,  ref: "User",  required: true, },
  sellerID: { type: String, required: true },
  category: { type: String, required: false },
  img: { type: String, required: false },
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;
