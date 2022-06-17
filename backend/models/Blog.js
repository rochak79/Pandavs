const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    blog: {
      type: String,
    },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
