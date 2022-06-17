const router = require("express").Router();
const Blog = require("../models/Blog");

// create blog
exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      message: "Blog created!",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add Blog!",
    });
  }
};

// Get all Blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({
      success: true,
      message: "Here you go!",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to get Blogs!",
    });
  }
};

// Get a blog
exports.getBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(500).json({
        success: false,
        message: "Unable to get Blog!",
      });
    } else {
      res.status(200).json({
        success: true,
        blog,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to get Blog!",
    });
  }
};

// Edit blog
exports.updateBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(500).json({
        success: false,
        message: "Unable to locate your blog!",
      });
    } else {
      (blogUpdated = await Blog.findByIdAndUpdate(req.params.id, req.body)),
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        };
      res.status(200).json({
        success: true,
        message: "Your Blog updated successfully!",
        blogUpdated,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update your Blog!",
    });
  }
};
// Delete a blog
exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(500).json({
      success: false,
      message: "Unable to locate your blog!",
    });
  } else {
    await blog.remove();

    res.status(200).json({
      success: true,
      message: "Blog Deleted!",
    });
  }
};
