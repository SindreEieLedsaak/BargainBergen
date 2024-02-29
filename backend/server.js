// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend' });
});

// Export the app to use it in your tests
module.exports = app;

