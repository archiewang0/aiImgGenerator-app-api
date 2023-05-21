
import express,{ Express ,Request, Response }  from 'express';
import dotenv from "dotenv"
import router from './router/api';
const cros = require('cors')

const app = express()

dotenv.config()
// 需要搭配 根目錄 設立.env的檔案 裡面的變數會對應到 process.env 的內容


const port = process.env.PORT ||5500

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 可以接收所有request
app.use(cros())

// 這裡是用post 所以需要有parse body的工具
// 解析 json 資料
app.use(express.json())
// 解析 encodeurl 資料
app.use(express.urlencoded({extended: true}))



app.use('/openai',router)

app.listen(port, () => { 
  console.log(`Server run http://localhost:${port}`)
})