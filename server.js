const express=require("express")
require("dotenv").config()
const fs=require("fs")

const app=express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Wellnesys Home Route!!!")
})

app.post("/api/users",(req,res)=>{
     let {name,email,gender,password}=req.body
     fs.readFile("./users.json",(err,data)=>{
        if(err){
            console.log(err)
        }else{
           let users=JSON.parse(data)
          for(let i=0;i<users.length;i++){
            if(users[i].email===email){
                res.status(409).send("User already exist.")
                return
            }
          }
          let user={name,email,gender,password}
          users.push(user)
          fs.writeFile("./users.json",JSON.stringify(users),(err)=>{
            if(err){
                res.status(500).send("Error While Saving user information")
            }else{
                res.status(201).send("User added sucessfully.")
            }
          })
        }
     })
})

app.get("/api/users",(req,res)=>{
    fs.readFile("./users.json",(err,data)=>{
        if(err){
            res.status(500).send("Error while retrieving users information")
        }else{
            res.status(200).send(data)
        }
    })
})

app.get("*",(req,res)=>{
    res.status(404).send("Page Not found")
})

app.listen(process.env.port,()=>{
    console.log(`server is running on port ${process.env.port}`)
})
