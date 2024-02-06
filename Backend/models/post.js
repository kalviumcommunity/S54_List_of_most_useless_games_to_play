const mongoose = require("mongoose")
const Post = mongoose.model("post",{
    title:{
        type:String,
        required : true
    },
    image:{
        type:String,
        required : true
    },
    user:{
        type : String,
    },
    likes:{
        type : Number,
        default:0
    },
    comments:{
        type : Number,
        default:0
    },

}) 
module.exports = Post