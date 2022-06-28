const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserDetails,
  getAllUsers,
  updateUser,
} = require("../controllers/usersController");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/user/:id").get(getUserDetails);

router.route("/users").get(getAllUsers);

router.route("/user/:id").put(updateUser);

module.exports = router;
