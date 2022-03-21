const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    firstName :{type:String,required:true,minlength:3,maxlength:30},
    lastName:{type:String,required:Option,minlength:3,maxlength:30},
    age:{type:Number,required:true,minlength:1,maxlength:150},
    email:{type:String,required:true,unique:true},
    img:{data:buffer,contentType:String},
},{
    timestamps:true,
    versionKey:false
})


const User = mongoose.model("user",userSchema)

module.exports = User