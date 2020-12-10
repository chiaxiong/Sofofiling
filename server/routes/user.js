const User = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User({
      firstName: "Chia",
      lastName: "Xiong",
      email: "chiaxiong@chia.com",
      password: "12345678",
    });

    await user.save();

    return res.send(user);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

module.exports = router;
