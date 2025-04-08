const fs = require('fs')
const path = require('path')
const mongoose = require('./models/connection_db')
const Comment = require('./models/schema/commentSchema') 


const rawData = fs.readFileSync(path.join(__dirname, './data.json'), 'utf-8')
const parsedData = JSON.parse(rawData)

async function seedData() {
  try {
    await Comment.deleteMany()
    await Comment.insertMany(parsedData.comments)
    console.log(`成功匯入 ${parsedData.comments.length} 筆留言資料`)
  } catch (err) {
    console.error('匯入資料失敗：', err)
  } finally {
    mongoose.connection.close() 
  }
}

seedData()