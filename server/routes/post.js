const { Post, validate } = require("../models/post");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const newPost = new Post({
      content: req.body.content,
      location: req.body.location,
    });

    await newPost.save();

    return res.send(newPost);
  } catch (err) {
    console.log(err);
    return res.status(500).json(`Server Error: ${err}`);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.send(posts);
  } catch (err) {
    return res.status(500).send(`Server Error: ${err}`);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        content: req.body.content,
      },
      { new: true }
    );

    await product.save();

    return res.send(product);
  } catch (err) {
    return res.status(500).send(`Server Error: ${err}`);
  }
});

module.exports = router;
