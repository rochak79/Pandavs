const router = require("express").Router();
const {
  getAllSeeds,
  deleteSeed,
  getSeedDetails,
} = require("../controllers/seedsController");
const Seeds = require("../models/Seeds");
const upload = require("../utils/Upload");

// Add seeds
router.post("/addseeds", upload.single("image"), async (req, res) => {
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
      let seeds = new Seeds({
        name: req.body.name,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        desc: req.body.desc,
        image: req.file.filename,
        stock: req.body.stock,
        discount: req.body.discount,
        qty: req.body.qty,
      });
      await seeds.save();
      res.status(200).json({
        success: true,
        message: "Seeds Added!!",
        seeds,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Failed to Add Seed",
      });
    }
  }
});

// Get all seedss
router.route("/seeds").get(getAllSeeds);

// delete a seeds
router.route("/:id").delete(deleteSeed);

// get a seeds
router.route("/:id").get(getSeedDetails);

// update seeds
router.route("/:id").put(upload.single("image"), async (req, res) => {
  let seeds = await Seeds.findById(req.params.id);
  if (!seeds) {
    return res.status(404).json({
      success: false,
      message: "seeds not found",
    });
  }
  seedsUpdated = await Seeds.findByIdAndUpdate(req.params.id, {
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
    seedsUpdated,
  });
});

module.exports = router;
