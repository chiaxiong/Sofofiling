const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("Email already in use.");

    const salt = await bcrypt.genSalt(10);
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
    });

    await user.save();

    return res.send({ _id: user._id, name: user.name, email: user.email });
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

module.exports = router;
