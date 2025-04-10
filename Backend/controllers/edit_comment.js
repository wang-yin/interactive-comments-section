const updated = require("../models/comment/edit_comment_model");

const editComment = async (req, res) => {
  try {
    const editId = parseInt(req.params.id);
    const editData = req.body;

    const result = await updated(editId, editData);
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "No data found" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message || "error" });
  }
};


module.exports = editComment;