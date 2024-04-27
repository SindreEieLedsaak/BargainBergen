const Order = require("../models/Order");


// Add item to the cart
const addItemToCart = async (req, res) => {
  const { productId, quantity, size, color, userId } = req.body;  // Including userId from request body

  console.log(`Attempting to add item to cart for user ${userId}`);

  try {
    let order = await Order.findOne({ user: userId, status: "pending" });
    if (!order) {
      console.log("No pending order found, creating a new one");
      order = new Order({
        user: userId,
        orderItems: [{ product: productId, quantity, size, color }],
      });
    } else {
      const itemIndex = order.orderItems.findIndex(
        (item) => item.product.toString() === productId
      );
      if (itemIndex > -1) {
        order.orderItems[itemIndex].quantity += quantity;
      } else {
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
// Fetch the current order for a user
const getCurrentOrder = async (req, res) => {
  const userId = req.query.userId; // Get userId from the request query

  try {
      const order = await Order.findOne({
          user: userId,
          status: "pending"
      }).populate("orderItems.product");

      if (!order) {
          console.log(`No current order found for user: ${userId}`);
          return res.status(404).json({ message: "No current order found for this user." });
      }

      console.log(`Current order retrieved successfully for user: ${userId}`);
      res.json(order);
  } catch (error) {
      console.error(`Error retrieving current order for user: ${userId}:`, error);
      res.status(500).json({ message: "Error retrieving current order", error });
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

const getTopThreeProducts = async (req, res) => {
  try {
    const topProducts = await Order.aggregate([
      { $unwind: "$orderItems" },
      {
        $group: {
          _id: "$orderItems.product",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: "clothings",
          localField: "_id",
          foreignField: "_id",
          as: "productDetails"
        }
      },
      {
        $project: {
          _id: 1,
          count: 1,
          productDetails: { $arrayElemAt: ["$productDetails", 0] }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: topProducts
    });
  } catch (error) {
    console.error('Error fetching top products:', error);
    res.status(500).send({
      success: false,
      message: 'Failed to fetch top products',
      error: error.message
    });
  }
};

module.exports = {
  addItemToCart,
  getCart,
  getCurrentOrder,
  getTopThreeProducts
};
