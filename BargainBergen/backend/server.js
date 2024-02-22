// server/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; // Choose a port that does not conflict with your React app

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
