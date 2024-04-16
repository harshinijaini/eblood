require("dotenv").config();
// import { path } from "path";
const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const donorRoutes = require("./routes/donors");
const userRoutes = require("./routes/user");
const cors = require("cors");
// const __dirname = path.resolve();

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

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

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
