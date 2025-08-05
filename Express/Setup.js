const express = require("express")
const app = express()
let port = 3000
app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("you contact root path")
})
app.post("/first-post-request",(req,res)=>{
    res.json(req.body)
})