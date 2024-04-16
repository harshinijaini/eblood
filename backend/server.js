require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const donorRoutes = require("./routes/donors");
const userRoutes = require("./routes/user");
const cors = require("cors");

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes

app.use("/api/donors", donorRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
