const getComments = require("../models/comment/get_comments_model")

const getCommentsData = async (req, res) => {
  try {
    const response = await getComments()
    res.status(200).json(response);
  } catch(err) {
    res.status(500).json({ message: err.message || "Error fetching Comments data" });
  }
}

module.exports = getCommentsData