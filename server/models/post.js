const Joi = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  location: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  limit: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  time: { type: String },
  date: { type: String },
  service: { type: String },
});

const Post = mongoose.model("Post", postSchema);

function validatePost(post) {
  const schema = Joi.object({
    content: Joi.string(),
    location: Joi.string(),
    limit: Joi.number(),
    title: Joi.string(),
    time: Joi.string(),
    date: Joi.string(),
    category: Joi.string(),
    service: Joi.string(),
  });
  console.log(schema.validate);
  return schema.validate(post);
}

exports.Post = Post;
exports.validate = validatePost;
exports.postSchema = postSchema;
