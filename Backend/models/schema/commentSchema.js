import mongoose from "mongoose";
import replySchema from "./replySchema";

const commentSchema = new mongoose.Schema({
  content: String,
  createdAt: String,
  score: Number,
  user: {
    username: String,
    image: {
      png: String,
      webp: String
    }
  },
  replies: [replySchema]
})

export default commentSchema;
