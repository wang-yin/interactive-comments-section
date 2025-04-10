const express = require('express')
const router = express.Router()
const getCommentsData = require("../controllers/get_comments")
const addComment = require("../controllers/add_comment")
const deleteComment = require("../controllers/delete_comment")
const editComment = require("../controllers/edit_comment")

router.get("/", getCommentsData)
router.post("/create", addComment)
router.delete("/comments/:id", deleteComment);
router.patch("/comments/edit/:id", editComment);

module.exports = router;