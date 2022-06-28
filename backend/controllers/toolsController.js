const Tools = require("../models/Tools");
const upload = require("../utils/Upload");

// Get all Tools
exports.getAllTools = async (req, res) => {
  try {
    let tools = await Tools.find();
    res.status(200).json({
      success: true,
      tools,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get all Tools.",
    });
  }
};

// get a tools
exports.getToolsDetails = async (req, res) => {
  const tools = await Tools.findById(req.params.id);

  if (!tools) {
    return res.status(404).json({
      success: false,
      message: "Tools not found",
    });
  } else {
    res.status(200).json(tools);
  }
};

// delete Tools
exports.deleteTools = async (req, res) => {
  const tools = await Tools.findById(req.params.id);

  if (!tools) {
    res.send({ status: "failed", message: "Tools not found" }, 404);
  } else {
    await tools.remove();

    res.status(200).json({
      success: true,
      message: "Tools deleted successfully",
    });
  }
};

// update a Tools
exports.updateTools = async (req, res, next) => {
  let tools = await Tools.findById(req.params.id);
  if (!tools) {
    return res.status(404).json({
      success: false,
      message: "Tools not found",
    });
  }

  toolsUpdated = await Tools.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    toolsUpdated,
  });
};
