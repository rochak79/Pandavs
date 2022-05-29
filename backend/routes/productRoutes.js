const router = require("express").Router();
const {
  getAllProducts,
  deleteProduct,
  getProductDetails,
  updateProduct,
} = require("../controllers/productController");
const upload = require("../utils/Upload");
const Products = require("../models/Product");

// Add product
router.post("/addproduct", upload.single("image"), async (req, res) => {
  try {
    let product = new Products({
      name: req.body.name,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
      quantity: req.body.quantity,
      desc: req.body.desc,
      image: req.file.filename,
      stock: req.body.stock,
      discount: req.body.discount,
    });
    await product.save();
    res.status(200).json({
      success: true,
      message: "Product Added!!",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to Add Product",
    });
  }
});

// Get all Products
router.route("/products").get(getAllProducts);

// delete a product
router.route("/:id").delete(deleteProduct);

// get a product
router.route("/:id").get(getProductDetails);

// update product
router.route("/:id").put(updateProduct);

module.exports = router;
