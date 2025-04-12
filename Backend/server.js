const express = require("express")
const app = express()
require("dotenv").config()
require('./models/connection_db')
const comments = require("./routes/comment")
const cors = require('cors')
const corsOptions = {
  origin: [
    "https://yininteractive-comments-section.netlify.app",
    "http://localhost:8888"
  ],
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};


app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 
app.use(express.json());


app.use('/', comments)


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Origin:", req.headers.origin); // 看誰在打你 API
  res.send("API running!");
});



