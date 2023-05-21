const express=require("express")
require("dotenv").config()
const fs=require("fs")
const { logger } = require("./middlewares/logger.middleware")
const { userRouter } = require("./Routes/user.route")
const { errorHandler } = require("./middlewares/error.middleware")

const app=express()
app.use(express.json())
app.use(logger)
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Wellnesys Home Route!!!")
})

app.get("*",(req,res)=>{
    res.status(404).send("Page Not found")
})

app.use(errorHandler)

app.listen(process.env.port,()=>{
    console.log(`server is running on port ${process.env.port}`)
})
