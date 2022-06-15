const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
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
    discount: {
      type: Number,
      // max: [2, "Badi vo"],
      required: true,
    },
  },
  { timestamps: true }
);

const productsModel = mongoose.model("Product", productsSchema);

module.exports = productsModel;
