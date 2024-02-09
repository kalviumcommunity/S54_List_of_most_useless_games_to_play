const express = require("express")
const mongoose = require("mongoose")
const Post = require("./models/post")
const app = express()
const port = 4001
const cors = require("cors")
const router = require("./routes")
require("dotenv").config()

async function main (){
    await mongoose.connect(
        process.env.MONGO_KEY
    )
}

const post = [
    new Post({
        title : "Candy Crush",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0ilXz5PeWNwSjjvf7mSZDm3Mm462UjIOvA",
        user : "sampleuser1",
        
    }),
    new Post({
        title : "Ninja Jump",
        image : "https://play-lh.googleusercontent.com/uYuN1ItgAmJUfsQE6thbxGOMBBpU2WfkDlHfJ0sY2b_vq8eVIi9XSin-B_rO-NkFeQ",
        user : "sampleuser2",
       
    }),
    new Post({
        title : "Fruit Ninja",
        image : "https://i.ytimg.com/vi/K1yxIY0kgXg/maxresdefault.jpg",
        user : "sampleuser3",
       
    }),
    new Post({
        title : "Subway Sufers",
        image : "https://assets-prd.ignimgs.com/2023/03/01/subwaysurfers-1677630205274.jpg",
        user : "sampleuser4",
       
    }),
    new Post({
        title : "Temple Run",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYZOryWRx9db4JDmPTUJi0x2hIPXjdeHeKw&usqp=CAU",
        user : "sampleuser5",
     
    }),
    new Post({
        title : "Hill Climb",
        image : "https://i.pinimg.com/736x/a9/b7/7e/a9b77e2d02f7f2838c31f9de5f6c3cb5.jpg",
        user : "sampleuser6",
        
    }),
    new Post({
        title : "Beach Buggy",
        image : "https://i.ytimg.com/vi/pkxE_3WqUR8/maxresdefault.jpg",
        user : "sampleuser7",
       
    }),
    new Post({
        title : "Dr. Driving",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xmjb287drp8tEaV_5ES246ftLLV3rwG3wg&usqp=CAU",
        user : "sampleuser8",
        
    }),
    new Post({
        title : "Minecraft",
        image : "https://m.media-amazon.com/images/I/51L0-hXjy+L.png",
        user : "sampleuser9",
        
    }),
    new Post({
        title : "Shadow Fight 2",
        image : "https://play-lh.googleusercontent.com/NY46ZZgz4nHvJABV3pbLCofb0Z9JCYyB05bRwaUwOfFWXnRvrzZcmmIlPHZw1iXEdw=w240-h480-rw",
        user : "sampleuser10",
        
    })
]

main();

// Post.insertMany(post)
// .then((docs)=>{
//     console.log("post inserted sucessfully")
// })
// .catch((err)=>{
//     console.log(err)
// })
app.use(cors())
app.use('/post',router)
app.get('/ping',(req,res)=>{
    res.send("ping-pong")
})

app.get('/',(req,res)=>{
    res.send("path")
})

app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})