const db = require("../schema/commentSchema")

module.exports = async function editData (id, newData) {
  try {
    const updated = await db.findOneAndUpdate(
      { id },
      { $set: newData },
      { new: true }
    );
    return updated
  } catch (err) {
    console.log(err)
  }
}