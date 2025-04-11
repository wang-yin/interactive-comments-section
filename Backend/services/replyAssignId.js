const Comment = require("../models/schema/commentSchema");

const replyAssignId = async () => {
  try {
    const allReplies = await Comment.aggregate([
      { $unwind: "$replies" }, // 拆開 replies 陣列
      { $project: { id: "$replies.id" } }, // 只保留 replies.id
      { $sort: { id: -1 } }, // 由大到小排序
      { $limit: 1 } // 只取最大值
    ]);

    const maxReplyId = allReplies.length > 0 ? allReplies[0].id : 0;
    return maxReplyId + 1;
  } catch (err) {
    console.log("replyAssignId 錯誤:", err);
    throw err;
  }
};

module.exports = replyAssignId;