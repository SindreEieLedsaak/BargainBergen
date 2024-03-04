const app = require('./server'); // Import the configured express app
const connectDB = require('./db'); // Import the function to connect to the database

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1); 
  }
};

startServer();
