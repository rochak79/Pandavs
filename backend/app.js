const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
dotenv.config({ path: "./config/.env" });
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// CORS Policy
app.use(cors());

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Load routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
