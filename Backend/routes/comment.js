const express = require('express')
const router = express.Router()
const cors = require("cors");
const getCommentsData = require("../controllers/get_comments")
const addComment = require("../controllers/add_comment")
const deleteComment = require("../controllers/delete_comment")
const editComment = require("../controllers/edit_comment")
const addReply = require("../controllers/add_reply")
const deleteReply = require("../controllers/delete_reply")
const editReply = require("../controllers/edit_reply")
const updateReplyScore = require("../controllers/updateReplyScore")
const updateCommentScore = require("../controllers/updateCommentScore")

const corsOptions = {
  origin: "https://yininteractive-comments-section.netlify.app",
  methods: ["GET", "POST", "PATCH", "DELETE"],
};

router.use(cors());


// comment //
router.get("/", getCommentsData)
router.post("/create", addComment)
router.delete("/comments/:id", deleteComment);
router.patch("/comments/edit/:id", editComment);
router.patch("/score/comment/:commentId", updateCommentScore)


// reply //
router.post("/reply/:id", addReply)
router.delete("/reply/:commentId/:replyId", deleteReply)
router.patch("/reply/edit/:commentId/:replyId" ,editReply)
router.patch("/score/reply/:commentId/:replyId", updateReplyScore)


module.exports = router;
