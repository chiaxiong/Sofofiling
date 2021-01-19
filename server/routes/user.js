const { User, validateSubscription } = require("../models/user");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.send(users);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

router.put("/subscribe/:id", auth, async (req, res) => {
  try {
    const { error } = validateSubscription(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const subscriptions = User.findByIdAndUpdate(
      { _id: req.params.id },
      { subscription: req.body.subscription },
      { new: true }
    );

    if (!subscriptions)
      return res.status(400).send(`${req.params.id} does not exist`);

    if (subscriptions) return res.status(200).send("Subscribed!");

    await subscriptions.save();
    return res.send(subscriptions);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
