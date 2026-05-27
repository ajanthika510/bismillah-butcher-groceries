const express = require("express");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();


// Allowed Origins from .env
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
      .map((origin) => origin.trim())
      .filter(Boolean)
  : [];  


// CORS Setup

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.length === 0) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);

      if ((process.env.NODE_ENV || "development") === "development") {
        return callback(null, true);
      }

      return callback(null, true);
    },

    credentials: true,
  })
);

app.use(express.json());


// Test Route
app.get("/", (req, res) => {

  res.send("Halal Butcher API Running");

});


// Routes
app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/messages", contactRoutes);


// Port
const PORT = process.env.PORT || 5000;


// Start Server
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});