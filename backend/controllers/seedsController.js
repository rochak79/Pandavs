const Seeds = require("../models/Seeds");
const upload = require("../utils/Upload");

// Get all Seeds
exports.getAllSeeds = async (req, res) => {
  try {
    let seeds = await Seeds.find();
    res.status(200).json({
      success: true,
      seeds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get all Seeds.",
    });
  }
};

// get a Seeds
exports.getSeedDetails = async (req, res) => {
  const seed = await Seeds.findById(req.params.id);

  if (!seed) {
    return res.status(404).json({
      success: false,
      message: "Seed not found",
    });
  } else {
    res.status(200).json(seed);
  }
};

// delete Seed
exports.deleteSeed = async (req, res) => {
  const seed = await Seeds.findById(req.params.id);

  if (!seed) {
    res.send({ status: "failed", message: "Seeds not found" }, 404);
  } else {
    await seed.remove();

    res.status(200).json({
      success: true,
      message: "Seed deleted successfully",
    });
  }
};

// update a Seed
exports.updateSeed = async (req, res, next) => {
  let seed = await Seeds.findById(req.params.id);
  if (!seed) {
    return res.status(404).json({
      success: false,
      message: "Seed not found",
    });
  }

  seedUpdated = await Seeds.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    seedUpdated,
  });
};
