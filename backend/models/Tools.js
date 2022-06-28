const mongoose = require("mongoose");

const toolsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number,
      required: true,
    },
    old_price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const toolsModel = mongoose.model("Tools", toolsSchema);

module.exports = toolsModel;
