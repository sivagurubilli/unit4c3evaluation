const mongoose = require("mongoose")


const commentSchema = mongoose.Schema({
    body :{type:String,required:true},
    comment_id:{type:mongoose.Schema.Types.ObjectId,ref:User,required:true},
    comment_id1:{type:mongoose.Schema.Types.ObjectId,ref:Book,required:true}


    
},{
    timestamps:true,
    versionKey:false
})


const Comment = mongoose.model("comment",commentSchema)

module.exports = Comment