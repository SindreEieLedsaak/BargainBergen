const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI; // Ensure this is set in your .env file

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose; // Exporting the connected mongoose
