const router = require("express").Router();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// Register a user
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  } else {
    if (name && email && password) {
      try {
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
        const doc = new User({
          name: name,
          email: email,
          password: hashPassword,
        });
        await doc.save();

        const saved_user = await User.findOne({ email: email });
        // Generate JWT TOKEN
        const token = jwt.sign(
          { userID: saved_user._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "5d" }
        );

        res.status(201).send({
          message: "Registration success!",
          token: token,
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          message: "Registration Failed!",
        });
      }
    }
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email: email });
      if (user != null) {
        const isMatch = await bcryptjs.compare(password, user.password);
        if (user.email === email && isMatch) {
          // Generate JWT Token

          const token = jwt.sign(
            { userID: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );

          // res.send({
          //   status: 200,
          //   message: "Login Success",
          //   token: token,
          // });
          res.status(201).json({
            success: true,
            message: "Logged in successfully!",
            token,
          });
        } else {
          res.status(500).json({
            success: false,
            message: "Email or Password is not valid!",
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "You are not a registered User!",
        });
      }
    } else {
      // res.send({ status: 500, message: "All fields are required" });
      res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
  } catch (error) {
    console.log(error);
    // res.send({ status: 500, message: "Sorry, you can't login" });
    res.status(400).json({
      success: false,
      message: "Sorry, you can't login!",
    });
  }
};
