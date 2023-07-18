const express = require("express");
const mongoose = require("mongoose");
const task = require("./routes/taskRoutes");

var url = "mongodb://localhost:27017/task";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
var app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.json("Welcome");
});

app.use("/api/task", task);

module.exports = app;
