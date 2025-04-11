const updatedReply = require("../models/reply/edit_reply_model")

const editComment = async (req, res) => {
  try {
    const commentId = parseInt(req.params.commentId);
    const replyId = parseInt(req.params.replyId);
    const editData = req.body;

    const result = await updatedReply(commentId, replyId, editData);

    res.status(200).json({ message: "Reply updated", data: result });
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to update reply" });
  }
};


module.exports = editComment;