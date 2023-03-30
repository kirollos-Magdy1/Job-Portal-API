require("dotenv").config();
const express = require("express");
require("express-async-errors");
const { connect } = require("mongoose");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// routes
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`Lestining to port ${port}`);
    });
  } catch (error) {
    console.log("failed to connect to db " + error);
  }
};

start();
