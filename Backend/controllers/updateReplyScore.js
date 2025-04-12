const replyScore = require("../models/reply/updateReplyScore_model")

const updateReplyScore = async(req, res) => {
  try {
    const delta = req.body.delta;
    const commentId = parseInt(req.params.commentId);
    const replyId = parseInt(req.params.replyId);
    const updated = await replyScore(commentId, replyId, delta);
    res.json(updated);
  } catch(err) {
    res.status(500).json({ message: "Failed to update reply score" });
  }
}

module.exports = updateReplyScore