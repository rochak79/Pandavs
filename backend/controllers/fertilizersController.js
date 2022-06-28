const Fertilizers = require("../models/Fertilizers");
const upload = require("../utils/Upload");

// Get all Fertilizers
exports.getAllFertilizers = async (req, res) => {
  try {
    let fertilizers = await Fertilizers.find();
    res.status(200).json({
      success: true,
      fertilizers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get all Fertilizers.",
    });
  }
};

// get a Fertilizer
exports.getFertilizerDetails = async (req, res) => {
  const fertilizers = await Fertilizers.findById(req.params.id);

  if (!fertilizers) {
    return res.status(404).json({
      success: false,
      message: "Fertilizer not found",
    });
  } else {
    res.status(200).json(fertilizers);
  }
};

// delete Fertilizer
exports.deleteFertilizer = async (req, res) => {
  const fertilizers = await Fertilizers.findById(req.params.id);

  if (!fertilizers) {
    res.send({ status: "failed", message: "Fertilizer not found" }, 404);
  } else {
    await fertilizers.remove();

    res.status(200).json({
      success: true,
      message: "Fertilizer deleted successfully",
    });
  }
};

// update a Fertilizer
exports.updateFertilizer = async (req, res, next) => {
  let fertilizers = await Fertilizers.findById(req.params.id);
  if (!fertilizers) {
    return res.status(404).json({
      success: false,
      message: "Fertilizer not found",
    });
  }

  FertilizerUpdated = await Fertilizers.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    FertilizerUpdated,
  });
};
