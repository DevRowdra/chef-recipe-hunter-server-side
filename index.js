const express = require('express')
const app = express()
const chef=require('./Chef.json')
const recipe=require('./Recipe.json')
cors = require('cors')
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
    res.send('my 10th assignment  10')
  })
  
  app.get('/chef',(req,res)=>{
    res.send(chef)
  })
  app.get('/chef/:id',(req,res)=>{
    const id=req.params.id
    const singleChef=chef.find(cf=>cf.chef_id == id)
    res.send(singleChef)
  })
  app.get('/chef/recipe/:id',(req,res)=>{
    const id=req.params.id
    const singleChef=recipe.filter(cf=>cf.chef_id == id)
    res.send(singleChef)
  })
  app.listen(port, () => {
    console.log(` port on ${port}`)
  })