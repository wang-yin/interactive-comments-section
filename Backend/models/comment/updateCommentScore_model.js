const db = require("../schema/commentSchema")

module.exports = async function updateCommentScore(commentId, delta) {
  try {
    const updated = await db.findOneAndUpdate(
      { id: commentId },
      { $inc: { score: delta } },
      { new: true }
    );
    return updated;
  } catch(err) {
    console.error(err);
    throw err;
  }
}