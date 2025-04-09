const express = require('express')
const router = express.Router()
const getCommentsData = require("../controllers/get_comments")
const addComment = require("../controllers/add_comment")

router.get("/", getCommentsData)
router.post("/create", addComment)

module.exports = router;