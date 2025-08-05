const express = require("express")
const app = express()
let port = 3000
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
app.get("/:username",(req,res)=>{
   const {username} = req.params
  res.send(`Hello ${username}`)
})