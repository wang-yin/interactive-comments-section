const db = require("../schema/commentSchema")

module.exports = async function getComments() {
  try {
    const comments = await db.find().sort({id:1})
    return comments
  } catch (err) {
    console.error("Error fetching Comments data:", err);
  }
}