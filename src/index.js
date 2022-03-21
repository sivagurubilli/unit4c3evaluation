const express = require("express")
const connect = require("./configs/db")

const postController = require("./controllers/post.controller")
const userController = require("./controllers/user.controller")

const {register,login} = require("./controllers/auth.controller")
const app = express()
app.use(express.json())






app.get("/user",userController)
app.post("/post",postController)
app.post("/register",regiser)
app.post("/login",login)



app.listen(5000,(req,res)=>{
    
    console.log("listen at 5000")
})



