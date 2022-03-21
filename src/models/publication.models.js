const mongoose = require("mongoose")



const publicationSchema = mongoose.Schema({
    Name :{type:String,required:true},
    publication_id:{type:mongoose.Schema.Types.ObjectId,ref:Book,required:true}

    
},{
    timestamps:true,
    versionKey:false
})


const Publication = mongoose.model("publication",publicationSchema)

module.exports = Publication