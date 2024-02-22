const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Post = require("./models/post");
const app = express();
require("dotenv").config();

router.use(express.json());

async function main() {
  await mongoose.connect(process.env.MONGO_KEY);
}

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log("Error Connecting!", err));

router.get(
  "/:id",
  async (req, res) => {
    let { id } = req.params;
    let result = await Post.findById(id);
    if (result == null) {
      throw new ExpressError(404, "Post not found..!");
    }
    console.log(result);
    res.send(result);
  }
);

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



module.exports = router;
