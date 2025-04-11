const express = require('express')
const router = express.Router()
const getCommentsData = require("../controllers/get_comments")
const addComment = require("../controllers/add_comment")
const deleteComment = require("../controllers/delete_comment")
const editComment = require("../controllers/edit_comment")
const addReply = require("../controllers/add_reply")
const deleteReply = require("../controllers/delete_reply")


// comment //
router.get("/", getCommentsData)
router.post("/create", addComment)
router.delete("/comments/:id", deleteComment);
router.patch("/comments/edit/:id", editComment);


// reply //
router.post("/reply/:id", addReply)
router.delete("/reply/:commentId/:replyId", deleteReply)

module.exports = router;
