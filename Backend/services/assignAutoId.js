const Comment = require("../models/schema/commentSchema");

const assignAutoId = async () => {
  try {
    const lastComment = await Comment.findOne().sort({ id: -1 });
    const nextId = lastComment ? lastComment.id + 1 : 1;
    return nextId;
  } catch (err) {
    console.log("assignAutoId 錯誤:", err);
    throw err;
  }
};

module.exports = assignAutoId;