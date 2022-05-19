const Product = require("../models/Product");
const express = require("express");

// create product
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
};

// get all products
exports.getAllProducts = async (req, res) => {
  Product.find({}, function (err, products) {
    if (err) {
      res.send("Opps! Something went wrong");
      next();
    } else {
      res.status(200).json({
        success: true,
        products,
      });
    }
  });
};

// get a product
exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  } else {
    res.status(200).json({
      success: true,
      product,
    });
  }
};

// delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.send({ status: "failed", message: "Product not found" }, 404);
  } else {
    await product.remove();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  }
};

// update a product
exports.updateProduct = async (req, res) => {
  let product = Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  } else {
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  }
};
