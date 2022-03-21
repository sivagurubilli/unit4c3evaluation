const mongoose = require("mongoose")


const bookSchema = mongoose.Schema({
    likes :{type:Number,required:true,default:0},
    coverImage:{type:String,required:true,default:1},
    age:{type:Number,required:true,minlength:1,maxlength:150},
    content:{type:String,required:true},
   
},{
    timestamps:true,
    versionKey:false
})


const Book = mongoose.model("book",bookSchema)

module.exports = Book