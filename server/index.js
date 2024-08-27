const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("Email and password are required");
  }

  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.status(401).json("the password  id incorrect");
      }
    } else {
      res.status(404).json("user doesn't exist!!");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
