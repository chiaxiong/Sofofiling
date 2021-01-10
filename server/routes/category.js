const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Joi = require("joi");
const { Category } = require("../models/category");

router.use(auth);

router.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    return res.send(category);
  } catch (error) {
    return res.status(400).send(`Database error: ${error}`);
  }
});

router.post("/", async (req, res) => {
  const error = validateCategory(req.body);
  if (error) {
    return res.status(400).send(error);
  }
  const category = new Category({
    title: req.body.title,
    post: [],
  });
  try {
    const result = await category.save();
    return res.send(result);
  } catch (error) {
    return res.status(400).send(`Database error: ${error}`);
  }
});

function validateCategory(category) {
  const schema = Joi.object({
    title: Joi.string(),
  });
  return schema.validate(category);
}

module.exports = router;
