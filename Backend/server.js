const express = require("express")
const app = express()
require("dotenv").config()
require('./models/connection_db')
const comments = require("./routes/comment")
const cors = require('cors')
const corsOptions = {
  origin: ["https://yininteractive-comments-section.netlify.app"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
}

app.use(cors(corsOptions))
app.use(express.json());


app.use('/', comments)

app.get("/", (req, res) => {
  res.send("API running!");
});



