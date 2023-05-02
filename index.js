const express = require('express')
const app = express()
const chef=require('./Chef.json')
cors = require('cors')
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
    res.send('my 10th assignment  10')
  })
  
  app.get('/chef',(req,res)=>{
    res.send(chef)
  })
  app.listen(port, () => {
    console.log(` port on ${port}`)
  })