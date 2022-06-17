const router = require("express").Router();

const {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// create blog
router.route("/createblog").post(createBlog);

// Get all blogs
router.route("/blogs").get(getAllBlogs);

// Get a blog
router.route("/:id").get(getBlog);

// Update a blog
router.route("/:id").put(updateBlog);

// Delete a blog
router.route("/:id").delete(deleteBlog);

module.exports = router;
