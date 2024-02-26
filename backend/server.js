const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Your user routes

const app = express();
const PORT = process.env.PORT || 3001; // Default to 3001 if PORT is not set

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://jvalen:StudentiBergen@cluster251.2bmzlk3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster251', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');

  // Start listening for requests only after the database connection is established
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1); // Exit the process with error
});

// Use the userRoutes for any requests to /users
app.use('/users', userRoutes);

// Root route for basic API health check
app.get('/', (req, res) => {
  res.send('API is running.');
});

// Error handling middleware for routes not found
app.use((req, res, next) => {
  res.status(404).send('Sorry, that route does not exist.');
});

// Error handling middleware for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
