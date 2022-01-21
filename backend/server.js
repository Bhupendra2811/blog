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


if(process.env.NODE_ENV =='production')
{
    app.use('/',express.static('client/build'))

    app.get('*',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => 'server running on port');