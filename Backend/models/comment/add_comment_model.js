const db = require("../schema/commentSchema")

module.exports = async function addComment (newComment) {
  try {
    const newCommentData = new db(newComment)
    return await newCommentData.save()
  } catch (err) {
    console.log(err)
  }
}