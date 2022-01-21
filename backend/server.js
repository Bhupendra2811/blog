import bodyParser from "body-parser"
import express from "express"
import connectDB from "./config/db.js"
import UserRoutes from "./Routes/UserRoutes.js"
import blogRoutes from "./Routes/blogRoutes.js"
import cors from "cors"
const app=express()
connectDB()
import path from 'path';
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(bodyParser.json())

app.use("/api/auth/",UserRoutes)
app.use("/api/blog/",blogRoutes)

app.use((err,req,res,next)=>{
    const statusCode=res.statusCode===200?500:res.statusCode
    res.status(statusCode);
    const eror={message:err.message,stack:process.env.NODE_ENV==="Production"?null:err.stack}
    res.json(eror)
    
})


app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'frontend/build/index.html'))
})

app.listen(5000,()=>{console.log("Server running on http://localhost:5000 ");})