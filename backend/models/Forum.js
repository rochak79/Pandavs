const mongoose = require("mongoose");
const forumSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

const forumModel = mongoose.model("Forum", forumSchema);
module.exports = forumModel;
