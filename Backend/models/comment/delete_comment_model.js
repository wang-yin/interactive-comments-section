const db = require("../schema/commentSchema")

module.exports = async function deleteData (id) {
  try {
    const data = await db.deleteOne({ id })
    return data
  } catch (err) {
    console.log(err)
  }
}