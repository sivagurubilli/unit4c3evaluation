
const express = require("express")

const mongoose = require("mongoose")
const User = require("../models/user.models")




app.post("",async(req,res)=>{
    try{
        const user = await User.findone(email)
        if(user){
            return res.send("Email already exists")

        }



    }catch(err){
        return res.send(err.message)
    }
})