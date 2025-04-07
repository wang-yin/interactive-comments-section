import dotenv from 'dotenv'

dotenv.config()

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI)

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

export default mongoose;
