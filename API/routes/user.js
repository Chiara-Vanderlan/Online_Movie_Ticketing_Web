const express = require("express");
const router = express.Router();
const User = require("../models/user");

//getting all

router.get("/getAll", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//getting one
router.get("/getOne/:id", getUser, (req, res) => {
  res.json(res.user);
});

//creating one
router.post("/save", async (req, res) => {
  const user = new User({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    password: req.body.password, 

  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = router;
