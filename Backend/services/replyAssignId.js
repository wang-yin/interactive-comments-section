const Comment = require("../models/schema/commentSchema");

const replyAssignId = async () => {
  try {
    const allReplies = await Comment.aggregate([
      { $unwind: "$replies" }, 
      { $project: { id: "$replies.id" } }, 
      { $sort: { id: -1 } }, 
      { $limit: 1 } 
    ]);

    const maxReplyId = allReplies.length > 0 ? allReplies[0].id : 0;
    return maxReplyId + 1;
  } catch (err) {
    console.log("replyAssignId 錯誤:", err);
    throw err;
  }
};

module.exports = replyAssignId;