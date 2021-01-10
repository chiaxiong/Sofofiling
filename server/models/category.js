const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: String,
  // posts: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Post",
  // },
});

const Category = mongoose.model("Category", categorySchema);

exports.Category = Category;
exports.categorySchema = categorySchema;
