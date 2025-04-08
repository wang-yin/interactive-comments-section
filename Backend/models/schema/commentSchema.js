const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  username: String,
  image: {
    png: String,
    webp: String
  }
}, { _id: false })

const replySchema = new mongoose.Schema({
  id: Number,
  content: String,
  createdAt: String,
  score: Number,
  replyingTo: String,
  user: userSchema
}, { _id: false })

const commentSchema = new mongoose.Schema({
  id: Number,
  content: String,
  createdAt: String,
  score: Number,
  user: userSchema,
  replies: [replySchema]
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)
