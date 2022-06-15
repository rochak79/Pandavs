const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  blog: {
    type: String,
  },
  ofDate: {
    type: Date,
  },
});
const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
