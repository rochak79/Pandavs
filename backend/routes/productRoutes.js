const router = require("express").Router();
const {
  getAllProducts,
  deleteProduct,
  getProductDetails,
  updateProduct,
  addToCart,
} = require("../controllers/productController");
const upload = require("../utils/Upload");
const Products = require("../models/Product");

// Add product
router.post("/addproduct", upload.single("image"), async (req, res) => {
  const {
    name,
    old_price,
    new_price,
    desc,
    image,
    stock,
    qty,
    discount,
    category,
  } = req.body;
  const dis = discount;
  const dl = dis.length;
  const nprice = new_price;
  const oprice = old_price;
  const sto = stock;
  const quantity = qty;

  // price validation
  if (nprice < 0 || oprice < 0) {
    res.status(400).json({
      success: false,
      message: "Price can't be negative!",
    });
  }
  // Dicount validation -more than 2
  else if (dl > 2) {
    if (dl > 2) {
      res.status(400).json({
        success: false,
        message: "Discount can't be more than 2 digits!",
      });
    }
  }

  // Dicount validation -more than 2
  else if (dis < 0) {
    if (dis < 0) {
      res.status(400).json({
        success: false,
        message: "Discount can't be negative!",
      });
    }
  }
  // Stock validation
  else if (sto < 0) {
    res.status(400).json({
      success: false,
      message: "Stock can't be negative!",
    });
  } else if (quantity < 0) {
    res.status(400).json({
      success: false,
      message: "Quantity can't be negative!",
    });
  } else {
    try {
      let product = new Products({
        name: req.body.name,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        desc: req.body.desc,
        image: req.file.filename,
        stock: req.body.stock,
        discount: req.body.discount,
        qty: req.body.qty,
        category: req.body.category,
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
  }
});

// Get all Products
router.route("/products").get(getAllProducts);

// delete a product
router.route("/:id").delete(deleteProduct);

// get a product
router.route("/:id").get(getProductDetails);

// update product
router.route("/:id").put(upload.single("image"), async (req, res) => {
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
    desc: req.body.desc,
    qty: req.body.qty,
    // image: req.file.filename,
    stock: req.body.stock,
    discount: req.body.discount,
  });

  res.status(200).json({
    success: true,
    productUpdated,
  });
});

module.exports = router;
