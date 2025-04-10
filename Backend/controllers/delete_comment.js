const deleteData = require("../models/comment/delete_comment_model");

const deleteComment = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await deleteData(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message || "error" });
  }
};

module.exports = deleteComment;