const { Post, validate } = require("../models/post");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.use(auth);

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const newPost = new Post({
      content: req.body.content,
      title: req.body.title,
      limit: req.body.limit,
      location: req.body.location,
      category: req.body.category,
      service: req.body.service,
      time: req.body.time,
      date: req.body.date,
      user: req.user._id,
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
    const posts = await Post.find().populate("user");
    return res.send(posts);
  } catch (err) {
    return res.status(500).send(`Server Error: ${err}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post)
      return res.status(400).send(`Post ${req.params.id} does not exist.`);

    return res.send(post);
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
        title: req.body.title,
        limit: req.body.limit,
        location: req.body.location,
        category: req.body.category,
        service: req.body.service,
        time: req.body.time,
        date: req.body.date,
      },
      { new: true }
    );

    if (!updatePost)
      return res.status(400).send(`Post ${req.params.id} does not exist.`);

    await updatePost.save();

    return res.send(updatePost);
  } catch (err) {
    return res.status(500).send(`Server Error: ${err}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id);
    if (!post)
      return res
        .status(400)
        .send(`This post "${req.params.id}" does not exist.`);
    return res.send(post);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.category }).populate(
      "user"
    );
    return res.send(posts);
  } catch (error) {
    return res.status(500).send(`Server error: ${error}`);
  }
});

router.post("/uploads", async (req, res) => {
  try {
    const file = req.files.files;

    if (!file || files === null) {
      return res.status(400).send("File not uploaded");
    }

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
      console.error(err);
      return res.status(500).send(error);
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
