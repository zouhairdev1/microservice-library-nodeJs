const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/libirary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require('./models/User');

app.post("/api/register", async (req, res) => {
  const { username,email, password } = req.body;
  const existingUser = await User.findOne({ 
    $or: [
      { username: username }, 
      { email: email } 
    ] 
  });
  if (existingUser) {
    return res.status(400).send({ message: "Username or email already exists" });
  }
  const user = new User({ username,email, password });
  await user.save();
 
  const token = jwt.sign({ userId: user._id }, "secret");

  res.status(201).send({  token,username:user.username  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user._id }, "secret");
    res.send({ token,username:user.username });
  } else {
    res.status(401).send({ message: "Invalid credentials" });
  }
});

app.listen(3001, () => {
  console.log("libirary running on port 3001");
});
