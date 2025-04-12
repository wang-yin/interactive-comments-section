const db = require("../schema/commentSchema");

module.exports = async function deleteReplyData(commentId, replyId) {
  try {
    const result = await db.findOneAndUpdate(
      { id: commentId }, 
      { $pull: { replies: { id: replyId } } }, 
      { new: true } 
    );

    return result; 
  } catch (err) {
    console.log("刪除 reply 時發生錯誤：", err);
    throw err;
  }
};