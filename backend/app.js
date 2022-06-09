const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const productRoutes = require("./routes/productRoutes");
const path = require("path");
const contact = require("./routes/contactRoutes");
const users = require("./routes/usersRoutes");
const admin = require("./routes/adminRoutes");

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// Static folder visible
app.use(express.static(path.join(__dirname, "public/images")));

// CORS Policy
app.use(cors());

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Load routes
app.use("/api/product", productRoutes);
app.use("/api/contact", contact);
app.use("/user", users);
app.use("/admin", admin);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
