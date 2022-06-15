const router = require("express").Router();
const Blog = require("../models/Blog");

// create blog
exports.createBlog = async (req, res) => {
  try {
    const newBlog = new Blog.create();
    res.status(201).json({
      success: true,
      message: "Blog created!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create a blog!",
    });
  }
};
