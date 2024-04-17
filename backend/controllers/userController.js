const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    res.status(200).send({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).send({ message: "Error deleting user.", error: error });
  }
};

const checkAndCreateUser = async (req, res) => {
  const { id, email } = req.body;

  try {
    let user = await User.findOne({ $or: [{ _id: id }, { email: email }] });

    if (!user) {
      user = new User(req.body);
      await user.save();
      return res.status(201).send(user);
    }
    res.status(200).send(user);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).send(error);
    } else {
      res.status(500).send(error);
    }
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  checkAndCreateUser,
};
