const router = require("express").Router();
const upload = require("../utils/Upload");
const {
  getAllFertilizers,
  deleteFertilizer,
  getFertilizerDetails,
} = require("../controllers/fertilizersController");
const Fertilizer = require("../models/Fertilizers");

// Add Fertilizer
router.post("/addfertilizers", upload.single("image"), async (req, res) => {
  const { name, old_price, new_price, desc, image, stock, qty, discount } =
    req.body;
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
      let fertilizer = new Fertilizer({
        name: req.body.name,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        desc: req.body.desc,
        image: req.file.filename,
        stock: req.body.stock,
        discount: req.body.discount,
        qty: req.body.qty,
      });
      await fertilizer.save();
      res.status(200).json({
        success: true,
        message: "Fertilizer Added!!",
        fertilizer,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Failed to Add Fertilizer",
      });
    }
  }
});

// Get all Fertilizers
router.route("/fertilizers").get(getAllFertilizers);

// delete a Fertilizer
router.route("/:id").delete(deleteFertilizer);

// get a Fertilizer
router.route("/:id").get(getFertilizerDetails);

// update Fertilizer
router.route("/:id").put(upload.single("image"), async (req, res) => {
  let fertilizer = await Fertilizer.findById(req.params.id);
  if (!fertilizer) {
    return res.status(404).json({
      success: false,
      message: "Fertilizer not found",
    });
  }
  FertilizerUpdated = await Fertilizer.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    desc: req.body.desc,
    qty: req.body.qty,
    stock: req.body.stock,
    discount: req.body.discount,
  });

  res.status(200).json({
    success: true,
    FertilizerUpdated,
  });
});

module.exports = router;
