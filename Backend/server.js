const express = require("express")
const app = express()
const port = 4001

app.get('/ping',(req,res)=>{
    res.send("ping-pong")
})

app.get('/',(req,res)=>{
    res.send("path")
})

app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})