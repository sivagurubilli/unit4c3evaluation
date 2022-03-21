const express = require("express")
const connect = require("./configs/db")
const postController = require("./controllers/post.controller")
const userController = require("./controllers/user.controller")

const {register,login} = require("./controllers/auth.controller")
const app = express()
app.use(express.json())






app.use("/user",userController)
app.use("/post",postController)
app.use("/register",regiser)
app.use("/login",login)



app.listen(5000,(req,res)=>{
    
    console.log("listen at 5000")
})



