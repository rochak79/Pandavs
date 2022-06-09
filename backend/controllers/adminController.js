const router = require("express").Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// Register admin
exports.registerAdmin = async (req, res) => {
  const { name, email, password, code } = req.body;
  const admin = await Admin.findOne({ email: email });
  const cod = await Admin.findOne({ code: code });
  if (admin) {
    res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  } else if (cod) {
    res.status(400).json({
      success: false,
      message: "Please provide Authentication key!",
    });
  } else {
    if ((name && email && password, code)) {
      try {
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
        const doc = new Admin({
          name: name,
          email: email,
          password: hashPassword,
          code: code,
        });
        await doc.save();

        const saved_admin = await Admin.findOne({ email: email });
        // Generate JWT TOKEN
        const token = jwt.sign(
          { adminID: saved_admin._id },
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
exports.loginAdmin = async (req, res) => {
  const { email, password, code } = req.body;
  const cod = await Admin.findOne({ code: code });

  try {
    const { email, password, co } = req.body;
    if (email && password && code) {
      const admin = await Admin.findOne({ email: email });
      const cod = await Admin.findOne({ code: code });
      const key = await Admin.findOne({ code: code });
      if (admin != null && key != null) {
        const isMatch = await bcryptjs.compare(password, admin.password);
        if (admin.email === email && key.code === code && isMatch) {
          // Generate JWT Token
          const token = jwt.sign(
            { adminID: admin._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );

          res.status(201).json({
            success: true,
            message: "Logged in successfully!",
            token,
            admin,
          });
        } else {
          console.log(email, password, code);
          res.status(500).json({
            success: false,
            message: "Email or Password is not valid!",
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "You are not a registered Admin!",
        });
      }
    } else if (!cod) {
      res.status(400).json({
        success: false,
        message: "Please provide an authentication key!",
      });
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
