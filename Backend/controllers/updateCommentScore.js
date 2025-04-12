const commentScore = require("../models/comment/updateCommentScore_model")

const updateCommentScore = async(req, res) => {
  try {
    const delta = req.body.delta; 
    const commentId = parseInt(req.params.commentId);
    const updated = await commentScore(commentId, delta);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update comment score" });
  }
}

module.exports = updateCommentScore