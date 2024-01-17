const mongoose=require('mongoose')


//schema
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Post=mongoose.model('Post',postSchema)
module.exports=Post;

