const express = require("express")

const User = require("../models/user.models")



app.get("/user",async(req,res)=>{
    try{
const user = await User.find(req).lean().exec() 
return res.send(user)
    }catch(err){
        return res.status(500).send(err.message)
    }
})



