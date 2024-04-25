// aiRoutes.js

const express = require('express');
const router = express.Router();
const { generateDescription } = require('../controllers/aiController');


// Route to generate product description
router.post('/generate-description', generateDescription);

module.exports = router;