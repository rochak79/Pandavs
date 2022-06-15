const { createBlog } = require("../controllers/blogController");

const router = require("express").Router();

// create blog
router.route("createblog").post(createBlog);

module.exports = router;
