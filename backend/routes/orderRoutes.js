const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/:orderId', getOrderById);
router.get('/user/:userId', getAllOrders);
router.put('/:orderId', updateOrder);
router.delete('/:orderId', deleteOrder);

module.exports = router;
