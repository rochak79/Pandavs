const Products = require("../models/Product");
const upload = require("../utils/Upload");

// Get all Products
exports.getAllProducts = async (req, res) => {
  try {
    let products = await Products.find();
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get all products.",
    });
  }
};

// get a product
exports.getProductDetails = async (req, res) => {
  const product = await Products.findById(req.params.id);

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
  const product = await Products.findById(req.params.id);

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
exports.updateProduct = async (req, res, next) => {
  let product = await Products.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  productUpdated = await Products.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    quantity: req.body.quantity,
    desc: req.body.desc,
    image: req.file.filename,
    stock: req.body.stock,
    discount: req.body.discount,
  });

  res.status(200).json({
    success: true,
    productUpdated,
  });
};
