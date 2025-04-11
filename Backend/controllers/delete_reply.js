const deleteReplyData = require("../models/reply/delete_reply_model")

const deleteReply = async (req, res) => {
  try {
    const commentId = parseInt(req.params.commentId);
    const replyId = parseInt(req.params.replyId);
    const result = await deleteReplyData(commentId, replyId);

     res.status(200).json({ message: "Reply deleted", data: result });

  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to delete reply" });
  }
}

module.exports = deleteReply;