const mongoose = require("mongoose")


const publicationSchema = mongoose.Schema({
    Name :{type:String,required:true}
    
},{
    timestamps:true,
    versionKey:false
})


const Publication = mongoose.model("publication",bookSchema)

module.exports = Publication