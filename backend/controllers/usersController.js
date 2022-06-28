const router = require("express").Router();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// Register a user
exports.registerUser = async (req, res) => {
  const { name, email, password, address, phone, gender, role, desc } =
    req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  } else {
    if (name && email && password && address && phone && gender) {
      try {
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
        const doc = new User({
          name: name,
          email: email,
          password: hashPassword,
          address: address,
          phone: phone,
          gender: gender,
          role: role,
          desc: desc,
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

// login
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
          res.status(201).json({
            success: true,
            message: "Logged in successfully!",
            token,
            user,
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
      res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Sorry, you can't login!",
    });
  }
};
// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to Find users!",
      });
    }
  } catch (error) {
    res.send(500).json({
      success: false,
      message: "Server encountered an error!",
    });
  }
};

// get a user
exports.getUserDetails = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status({
      success: false,
      message: "User not found!",
    });
  }
  res.status(200).json({
    success: true,
    user,
  });
};

// update a user
exports.updateUser = async (req, res) => {
  let user = User.findById(req.params.id);
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Unable to locate User!",
    });
  }
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "User updated!",
    user,
  });
};
