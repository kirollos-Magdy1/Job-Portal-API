require("dotenv").config();
const express = require("express");
require("express-async-errors");
const { connect } = require("mongoose");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const auth = require("./routes/authRoutes");
const user = require("./routes/userRoutes");
const company = require("./routes/companyRoutes");
const job = require("./routes/jobRoutes");
const application = require("./routes/applicationRoute");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// routes
app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/company", company);
app.use("/api/job", job);
app.use("/api/application", application);

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
