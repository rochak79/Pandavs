const router = require("express").Router();
const {
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getAllContacts,
} = require("../controllers/contactController");

// Send contact
router.route("/contact").post(createContact);

// Get all contacts
router.route("/contacts").get(getAllContacts);

// Get a contact
router.route("/:id").get(getContact);

// Update a contact
router.route("/:id").put(updateContact);

// Delete a contact
router.route("/:id").delete(deleteContact);

module.exports = router;
