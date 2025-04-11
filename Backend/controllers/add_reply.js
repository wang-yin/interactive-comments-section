const addReplyData = require("../models/reply/add_reply_model")
const replyAssignId = require("../services/replyAssignId");

const addReply = async (req, res) => {
  try {
    const nextId = await replyAssignId();
    const commentId = parseInt(req.params.id)
    const newReply = {
      id: nextId,
      content: req.body.content,
      createdAt: req.body.createdAt,
      score: req.body.score,
      replyingTo: req.body.replyingTo,
      user: req.body.user,
    };
    
    const result = await addReplyData(newReply, commentId);
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error creating new reply" });
  }
};

module.exports = addReply;
