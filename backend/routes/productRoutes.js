const express = require("express");
const router = express.Router();
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
} = require("../controllers/productController");

// add product
router.route("/addproduct").post(createProduct);

// delete a product
router.route("/:id").delete(deleteProduct);

// get all products
router.route("/products").get(getAllProducts);

// get a product
router.route("/:id").get(getProductDetails);

// update product
router.route("/:id").put(updateProduct);

module.exports = router;
