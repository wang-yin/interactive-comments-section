const express = require("express")
const app = express()
require("dotenv").config()
require('./models/connection_db')
const comments = require("./routes/comment")
const cors = require('cors')
const corsOptions = {
  origin: ["http://localhost:5173"],
}


const port = process.env.PORT

app.use(cors(corsOptions))
app.use('/', comments)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})

