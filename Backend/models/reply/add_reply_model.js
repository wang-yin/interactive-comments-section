const db = require("../schema/commentSchema");

module.exports = async function addReply(newReply, commentId) {
  try {
    const result = await db.findOneAndUpdate(
      { id: commentId },
      { $push: { replies: newReply } },
      { new: true } 
    );

    const createdReply = result.replies.find((r) => r.id === newReply.id);
    return createdReply;
  } catch (err) {
    console.log(err);
    throw err;
  }
};