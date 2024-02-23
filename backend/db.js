const { MongoClient, ServerApiVersion } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://jvalen01:<StudentiBergen>@cluster251.3ybeuw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster251';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// Database Name
const dbName = 'BargainBergenDB';

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);