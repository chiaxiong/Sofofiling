const Joi = require("joi");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");

router.post("/signin", async (req, res) => {
  console.log(req.body);
  try {
    const { error } = validateLogin(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("Invalid email or password.");

    const token = user.generateAuthToken();

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password.");
    return res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .json({ token });
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.post("/signup", async (req, res) => {
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

    const token = user.generateAuthToken();

    return res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

function validateLogin(req) {
  const schema = Joi.object({
    email: Joi.string().min(2).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(req);
}

module.exports = router;
