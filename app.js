const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./route");
const path = require("path");
const http = require("http");

const fs = require("fs");
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use("/app", route);

// const connctionUrl =
//   "mongodb+srv://anirban00537:anirban00537@cluster0.rsvp4.mongodb.net/taskmanagement?retryWrites=true&w=majority";
const connctionUrl =
  "mongodb+srv://imperial:imperial@cluster0.37e8r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(connctionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });
app.listen(PORT, () => {
  console.log("connected");
});

app.use(express.static(path.join(__dirname, "/build")));
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});
mongoose.set("useFindAndModify", false);
