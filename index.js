const express = require('express')
const app = express()
cors = require('cors')
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
    res.send('my 10th assignment  10')
  })
  
  app.listen(port, () => {
    console.log(` port on ${port}`)
  })