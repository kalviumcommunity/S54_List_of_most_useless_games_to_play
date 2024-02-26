const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");
const User = require("./models/user");
const app = express();
const port = 5050;
const cors = require("cors");
const { router, user } = require("./routes");
require("dotenv").config();

app.use(cors());

async function main() {
  await mongoose.connect(process.env.MONGO_KEY);
}

const post = [
  new Post({
    title: "Candy Crush",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0ilXz5PeWNwSjjvf7mSZDm3Mm462UjIOvA",
    user: "Aman",
  }),
  new Post({
    title: "Ninja Jump",
    image:
      "https://play-lh.googleusercontent.com/uYuN1ItgAmJUfsQE6thbxGOMBBpU2WfkDlHfJ0sY2b_vq8eVIi9XSin-B_rO-NkFeQ",
    user: "Pranshu",
  }),
  new Post({
    title: "Fruit Ninja",
    image: "https://i.ytimg.com/vi/K1yxIY0kgXg/maxresdefault.jpg",
    user: "Rikhil",
  }),
  new Post({
    title: "Subway Sufers",
    image:
      "https://assets-prd.ignimgs.com/2023/03/01/subwaysurfers-1677630205274.jpg",
    user: "Aman",
  }),
  new Post({
    title: "Temple Run",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYZOryWRx9db4JDmPTUJi0x2hIPXjdeHeKw&usqp=CAU",
    user: "Dwij",
  }),
  new Post({
    title: "Hill Climb",
    image:
      "https://i.pinimg.com/736x/a9/b7/7e/a9b77e2d02f7f2838c31f9de5f6c3cb5.jpg",
    user: "Rikhil",
  }),
  new Post({
    title: "Beach Buggy",
    image: "https://i.ytimg.com/vi/pkxE_3WqUR8/maxresdefault.jpg",
    user: "Dwij",
  }),
  new Post({
    title: "Dr. Driving",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xmjb287drp8tEaV_5ES246ftLLV3rwG3wg&usqp=CAU",
    user: "Manpreet",
  }),
  new Post({
    title: "Minecraft",
    image: "https://m.media-amazon.com/images/I/51L0-hXjy+L.png",
    user: "Pranshu",
  }),
  new Post({
    title: "Shadow Fight 2",
    image:
      "https://play-lh.googleusercontent.com/NY46ZZgz4nHvJABV3pbLCofb0Z9JCYyB05bRwaUwOfFWXnRvrzZcmmIlPHZw1iXEdw=w240-h480-rw",
    user: "Manpreet",
  }),
];
const users = [
  new User({
    username: "Dwij",
    password: "testpass1",
  }),
  new User({
    username: "Manpreet",
    password: "testpass2",
  }),
  new User({
    username: "Pranshu",
    password: "testpass3",
  }),
  new User({
    username: "Aman",
    password: "testpass4",
  }),
  new User({
    username: "Rikhil",
    password: "testpass5",
  }),
];

main();

// Post.insertMany(post)
// User.insertMany(users)
// .then((docs)=>{
//     console.log("post inserted sucessfully")
// })
// .catch((err)=>{
//     console.log(err)
// })
app.use(cors());
app.use("/post", router);
app.use("/users", user);
app.get("/ping", (req, res) => {
  res.send("ping-pong");
});

app.get("/", (req, res) => {
  res.send("Connection created");
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
