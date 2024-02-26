const mongoose = require('mongoose');

const uri = 'mongodb+srv://jvalen:StudentiBergen@cluster251.2bmzlk3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster251'; // Ensure this is set in your .env file

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose; // Exporting the connected mongoose
