const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const clothingRoutes = require("./routes/products/clothingRoutes");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/clothings", clothingRoutes);

app.get("/", (req, res) => {
  res.send("API is running.");
});

app.get("/api", (req, res) => {
  res.json({ message: "API is running." });
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, that route does not exist.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

if (require.main === module) {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  });
}

module.exports = app;
