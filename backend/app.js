// Express app (shared by local server.js and Vercel serverless entry)
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middlewares
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send({ success: true, message: "Portfolio API is running" });
});

// routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

module.exports = app;
