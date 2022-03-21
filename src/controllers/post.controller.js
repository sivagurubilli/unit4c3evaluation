const express = require("express")

const mongoose= require("mongoose")

const Publication = require("../models/publication.models")


app.post("/publication",async(req,res)=>{
    try{
const publication = await Publication.create(req.body).lean().exec() 
return res.send(publication)
    }catch(err){
        return res.status(500).send(err.message)
    }
})