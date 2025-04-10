const addCommentData = require("../models/comment/add_comment_model");
const assignAutoId = require("../services/assignAutoId")


const addComment = async (req, res) => {
  try {
    const nextId = await assignAutoId();

    const newComment = {
      id: nextId,
      content: req.body.content,
      createdAt: req.body.createdAt,
      score: req.body.score,
      user: req.body.user,
      replies: req.body.replies,
    };
    const result = await addCommentData(newComment);
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Error creating new comment" });
  }
};

module.exports = addComment;
