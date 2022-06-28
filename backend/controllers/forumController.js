const Forum = require("../models/Forum");

// Create forum
exports.addForum = async (req, res) => {
  try {
    const forum = await Forum.create(req.body);
    res.status(201).json({
      success: true,
      message: "Forum added!",
      forum,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add forum!",
    });
  }
};

// Get a forum
exports.getForum = async (req, res) => {
  try {
    let forum = await Forum.findById(req.params.id);
    if (!forum) {
      res.status(500).json({
        success: false,
        message: "Failed to locate your forum!",
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Here you go!",
        forum,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to locate forum!",
    });
  }
};

// Get all forums
exports.getAllForums = async (req, res) => {
  try {
    const forum = await Forum.find();
    res.status(200).json({
      success: true,
      message: "Here you go!",
      forum,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server encountered some problem!",
    });
  }
};
// Delete a forum
exports.deleteForum = async (req, res) => {
  try {
    let forum = await Forum.findById(req.params.id);
    if (!forum) {
      res.status(500).json({
        success: false,
        message: "Failed to locate your forum!",
      });
    } else {
      await forum.remove();
      res.status(200).json({
        success: true,
        message: "Forum Deleted!",
      });
    }
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Server encountered some problem!",
    });
  }
};

// Update a forum
exports.updateForum = async (req, res) => {
  let forum = Forum.findById(req.params.id);
  if (!forum) {
    return res.status(500).json({
      success: false,
      message: "Unable to locate forum!",
    });
  }
  forum = await Forum.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Forum updated!",
    forum,
  });
};
