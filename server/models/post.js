const Joi = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
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
  time: String,
  date: String,
});

const Post = mongoose.model("Post", postSchema);

function validatePost(post) {
  const schema = Joi.object({
    content: Joi.string().required(),
    location: Joi.string().required(),
    limit: Joi.number(),
  });
  return schema.validate(post);
}

exports.Post = Post;
exports.validate = validatePost;
exports.postSchema = postSchema;
