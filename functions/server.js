const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

dotenv.config({
  path: "./config.env",
});

const app = express();
// Middlewares
// Set security HTTP headers
app.use(express.json());
app.use(cors());
// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

app.use("/v1/blog", blogRoutes);
app.use("/v1/quote", quoteRoutes);
// End of Middlewares

module.exports = app;
