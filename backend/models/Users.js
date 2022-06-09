const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: {
    type: Boolean,
    default: "false",
  },
  // role: {
  //   type: String,
  //   enum: ["Admin", "User", "Null"],
  //   default: "User",
  // },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
