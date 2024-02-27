const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET: Retrieve all users
router.get('/', userController.getAllUsers);

// POST: Create a new user
router.post('/', userController.createUser);

router.delete('/:id', userController.deleteUser); // Delete a specific user by id

module.exports = router;

