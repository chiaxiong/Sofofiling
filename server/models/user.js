const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");
const { postSchema } = require("./post");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 255,
    required: true,
  },
  subscriptions: [String],
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    },
    config.get("jwtSecret")
  );
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.string().min(2).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(user);
}

function validateCategory(subBody) {
  const schema = Joi.object({
    subscriptions: Joi.string().required(),
  });
  return schema.validate(subBody);
}

exports.User = User;
exports.validateSubscription = validateCategory;
exports.validate = validateUser;
exports.userSchema = userSchema;
