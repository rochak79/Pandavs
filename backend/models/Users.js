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
  address: {
    type: String,
    minlength: 5,
    maxlength: 1024,
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Null"],
    default: "User",
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
