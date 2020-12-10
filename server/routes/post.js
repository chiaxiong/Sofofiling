const Post = require("../models/post");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body,
    });

    await newPost.save();

    return res.send(newPost);
  } catch (err) {
    console.log(err);
    return res.status(500).json(`Server Error: ${err}`);
  }
});

module.exports = router;
