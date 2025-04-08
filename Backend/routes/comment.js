const express = require('express')
const router = express.Router()
const getCommentsData = require("../controllers/get_comments")

router.get("/", getCommentsData)

module.exports = router;