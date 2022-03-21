const express = require("express")
const connect = require("./configs/db")

const app = express()



app.listen(5000,(req,res)=>{
    
    console.log("listen at 5000")
})



