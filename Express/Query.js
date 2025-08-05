const express = require("express")
const app = express()
let port = 3000
app.listen(port,(req,res)=>{
    console.log(`app is listening on port ${port}`)
})
app.get("/",(req,res)=>{
    const {name,age}=req.query
    res.send(`Your name is ${name} and age is ${age}`)
})