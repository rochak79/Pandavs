const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    unique: true,
    required: true,
  },
});
const adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;
