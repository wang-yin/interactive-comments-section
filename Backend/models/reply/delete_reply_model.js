const db = require("../schema/commentSchema");

module.exports = async function deleteReplyData(commentId, replyId) {
  try {
    const result = await db.findOneAndUpdate(
      { id: commentId }, // 外層 comment 匹配
      { $pull: { replies: { id: replyId } } }, // 移除 replies 中 id 符合的回覆
      { new: true } // 回傳更新後的結果（可選，看你要不要用）
    );

    return result; // 你也可以只回傳 status 或成功訊息
  } catch (err) {
    console.log("刪除 reply 時發生錯誤：", err);
    throw err;
  }
};