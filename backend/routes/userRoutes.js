const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController.js");
const checkUserAuth = require("../middlewares/auth-middleware.js");

// Route middleware to protect route
router.use("/changepassword", checkUserAuth);
router.use("/loggeduser", checkUserAuth);

// Public route
router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);
router.post(
  "/send-reset-password-email",
  UserController.sendUserPasswordResetEmail
);
router.post("/reset-password/:id/:token", UserController.userPasswordReset); //url for password and confirm password

// protected route
router.post("/changepassword", UserController.changeUserPassword);
router.get("/loggeduser", UserController.loggedUser);

module.exports = router;
