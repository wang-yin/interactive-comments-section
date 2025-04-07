import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  content: String,
  createdAt: String,
  score: Number,
  replyingTo: String,
  user: {
    username: String,
    image: {
      png: String,
      webp: String,
    },
  },
});

export default replySchema;
