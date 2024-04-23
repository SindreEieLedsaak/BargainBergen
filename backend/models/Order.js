const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Clothing', required: true },
  quantity: { type: Number, default: 1 },
  size: { type: String },
  color: { type: String }
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  status: { type: String, default: 'pending' }, // You can add more statuses like shipped, delivered, etc.
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
