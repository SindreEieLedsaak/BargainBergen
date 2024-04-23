const Order = require("../models/orderModel");

// Add item to the cart
const addItemToCart = async (req, res) => {
  const { productId, quantity, size, color } = req.body;
  const userId = req.user._id; // Assume user ID is set in the request by authentication middleware

  console.log(`Attempting to add item to cart for user ${userId}`);

  try {
    let order = await Order.findOne({ user: userId, status: "pending" });
    if (!order) {
      console.log("No pending order found, creating a new one");
      // Create a new order if no pending order exists
      order = new Order({
        user: userId,
        orderItems: [{ product: productId, quantity, size, color }],
      });
    } else {
      console.log("Adding new item to existing order");
      // Add new item to existing order
      const itemIndex = order.orderItems.findIndex(
        (item) => item.product.toString() === productId,
      );
      if (itemIndex > -1) {
        console.log("Item already in cart, updating quantity");
        // Update item in cart if already exists
        order.orderItems[itemIndex].quantity += quantity;
      } else {
        console.log("Adding new item to the order");
        // Add new item to the order
        order.orderItems.push({ product: productId, quantity, size, color });
      }
    }
    await order.save();
    console.log("Order updated successfully");
    res.status(201).json(order);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Error adding item to cart", error });
  }
};

// Get cart for user
const getCart = async (req, res) => {
  const userId = req.user._id;
  try {
    const order = await Order.findOne({
      user: userId,
      status: "pending",
    }).populate("orderItems.product");
    if (!order) {
      return res.status(404).json({ message: "No cart found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error getting cart", error });
  }
};

module.exports = {
  addItemToCart,
  getCart,
};
