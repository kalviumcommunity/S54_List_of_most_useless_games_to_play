const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()
const Post = require("./models/post");
const app = express();
require('dotenv').config();

router.use(express.json())

async function main() {
    await mongoose.connect(
        process.env.MONGO_KEY
    );
}

main()
    .then(() => {
        console.log("Connection Successful!");
    })
    .catch((err) => console.log("Error Connecting!", err));

    router.get("/", async (req, res)=>{
    await Post.find().then((data)=>{returnData = data});
    res.send(returnData);
})

router.post("/", async (req, res) => {
    let insertData = new Post(req.body);
    insertData.save()
        .then(() => res.send("Added"))
        .catch((err) => res.status(500).send(err));
});

router.put("/:title", async (req, res) => {
    const { title } = req.params;
    const newData = req.body.title;
    try {
        const updatedTitle = await Post.findOneAndUpdate({ title : title }, { title : newData });
        if (updatedTitle) {
            res.send(`Updated the data! ${updatedTitle}`);
        } else {
            res.status(404).send("Title not found");
        }
    } catch (err) {
        console.error("Error updating data", err);
        res.status(500).send(err);
    }
});


router.delete("/", async(req, res)=>{
    try {
        let toDelete = req.body.title;
        let del = await Post.deleteOne({title:toDelete})
        if (del.deletedCount == 0){
            res.status(404).send(`Could not Find the title`)
        }else{
            res.send(`Deleted ${toDelete}`);
        }
    }
    catch{
        res.status(500).send("Internal Server Error Occured.")
    }
})

module.exports = router
