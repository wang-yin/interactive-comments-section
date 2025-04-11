const db = require("../schema/commentSchema")

module.exports = async function editReply (commentId, replyId, editData) {
  try {
    const updated = await db.findOneAndUpdate(
      {
        id: commentId,
        "replies.id": replyId, // 鎖定內層 reply
      },
      {
        $set: {
          "replies.$.content": editData.content,
        },
      },
      {
        new: true, 
      }
    );

    return updated;
  } catch (err) {
    console.log(err)
  }
}