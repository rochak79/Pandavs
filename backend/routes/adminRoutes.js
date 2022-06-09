const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/adminController");

router.route("/adminregister").post(registerAdmin);

router.route("/adminlogin").post(loginAdmin);

module.exports = router;
