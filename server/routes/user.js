const { User, validateSubscription } = require("../models/user");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("post");
    return res.send(users);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

router.get("/userId", auth, async (req, res) => {
  try {
    console.log("hit");
    const user = await User.findById(req.user._id);

    if (!user) return res.status(400).send(`User does not exist`);

    return res.send(user);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
});

router.put("/subscribe", auth, async (req, res) => {
  try {
    console.log(req.user);
    const { error } = validateSubscription(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.user._id);
    if (!user) return res.status(400).send(`${user} does not exist`);

    // if (user.subscriptions === req.body.subscriptions)
    //   return res.status(400).send("Already subscribed");

    user.subscriptions.push(req.body.subscriptions);

    await user.save();

    return res.send(user);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

router.get("/subscriptions", auth, async (req, res) => {
  try {
    const addSubscriptions = await User.findById(
      req.user._id,
      { subscriptions: req.body.subcriptions },
      { new: true }
    );

    if (!user) return res.status(400).send(`${user} does not exist`);

    return res.send(addSubscriptions);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

router.delete("/subscriptions", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(400).send(`${user} does not exist`);

    const subList = user.subscriptions;

    const removeSubscriptions = subList.filter(item => {
      return item === null;
    });
    console.log(removeSubscriptions);

    user.subscriptions = removeSubscriptions;

    await user.save();

    return res.send(user);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

module.exports = router;
