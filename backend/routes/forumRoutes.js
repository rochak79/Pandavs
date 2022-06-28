const router = require("express").Router();
const {
  addForum,
  getAllForums,
  getForum,
  deleteForum,
  updateForum,
} = require("../controllers/forumController");

// Add forrm
router.route("/addforum").post(addForum);

// Get all forums
router.route("/forums").get(getAllForums);

// Get a forum
router.route("/:id").get(getForum);

// Delete a forum
router.route("/:id").delete(deleteForum);

// Update a forum
router.route("/:id").put(updateForum);

module.exports = router;
