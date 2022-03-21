const mongoose = require("mongoose")


const commentSchema = mongoose.Schema({
    body :{type:String,required:true}
    
},{
    timestamps:true,
    versionKey:false
})


const Comment = mongoose.model("comment",bookSchema)

module.exports = Comment