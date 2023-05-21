const fs=require("fs")
const logger=(req,res,next)=>{
    let method=req.method
    let url=req.url
    let reqTime=new Date()
    let obj={method,url,reqTime}
    fs.readFile("./logger.json",(err,data)=>{
        if(err){
            console.log("Error while reading the logger file",err)
        }else{
            let loggerData=JSON.parse(data)
            loggerData.push(obj)
            fs.writeFile("./logger.json",JSON.stringify(loggerData),(err)=>{
                if(err){
                    console.log("Error while writting on the logger file",err)
                }else{
                    next()
                }
             })
        }
    })
    
     
}

module.exports={
    logger
}