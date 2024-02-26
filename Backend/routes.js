const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Post = require("./models/post");
const { postValidation } = require("./utils/postValidation");
const user = express.Router();
const User = require("./models/user.js");
const app = express();
var jwt = require("jsonwebtoken");
require("dotenv").config();

router.use(express.json());
user.use(express.json());

async function main() {
  await mongoose.connect(process.env.MONGO_KEY);
}

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log("Error Connecting!", err));

const jwtVerify = (req, res, next) => {
  try {
    let { authorization } = req.headers;
    let result = jwt.verify(authorization, process.env.JWT_PASS);
    console.log(result.username);
    next();
  } catch (err) {
    throw new ExpressError(
      403,
      "Not authorised to access this route without correct auth token"
    );
  }
};

const validatePost = (req, res, next) => {
  let { error } = postValidation.validate(req.body);
  if (error) {
    res.status(404).send(error);
  } else {
    next();
  }
};

router.get("/", async (req, res) => {
  await Post.find().then((data) => {
    returnData = data;
  });
  res.send(returnData);
});

user.get("/", async (req, res) => {
  await Place.find().then((data) => {
    returnData = data;
  });
  res.send(returnData);
});

user.post("/", async (req, res) => {
  let newData = new User(req.body);
  await newData.save();
  let token = jwt.sign({ username: req.body.userName }, process.env.JWT_PASS);
  res.send(token);
});

user.post("/login", async (req, res) => {
  let { username, password } = req.body;
  console.log("====================================");
  console.log(req.body);
  console.log("====================================");
  let result = await User.find({ username: username });
  if (result.length == 0) {
    throw new Error("User not found!");
  } else {
    let savedPassword = result[0].password;
    if (savedPassword != password) {
      res.status(401);
    } else {
      let token = jwt.sign(
        { username: req.body.username },
        process.env.JWT_PASS
      );
      res.send(token);
    }
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let result = await Post.findById(id);
  if (result == null) {
    throw new ExpressError(404, "Post not found..!");
  }
  console.log(result);
  res.send(result);
});

router.post("/", validatePost,jwtVerify, async (req, res) => {
  let insertData = new Post(req.body);
  insertData
    .save()
    .then(() => res.send("Added"))
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const result = await Post.findByIdAndUpdate(id, newData);
    if (!result) {
      return res.status(404).send("Post not found");
    }
    res.send("Updated");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Post.findByIdAndDelete(id);
    if (!del) {
      return res.status(404).send("Post not found");
    }
    res.send(`Deleted`);
  } catch (error) {
    console.error("Error deleting data", error);
    res.status(500).send(error.message);
  }
});

module.exports = { router, user };
