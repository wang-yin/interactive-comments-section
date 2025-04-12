const db = require("../schema/commentSchema")

module.exports = async function updateReplyScore (commentId, replyId, delta) {
  try {
    const updated = await db.findOneAndUpdate(
      { 
        id: commentId, 
        "replies.id": replyId,
      },
      { $inc: { "replies.$.score": delta } },
      { new: true }
    );
    return updated;
  } catch(err) {
    console.error(err);
    throw err;
  }
}