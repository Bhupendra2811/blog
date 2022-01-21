import express from "express"
import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import Blogs from "../Models/BlogsModel.js"
import User from "../Models/UserModel.js"
const router=express()

export const protect=asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        console.log("token found");
    } 
    try {
        token =req.headers.authorization.split(" ")[1]
        const decoded=jwt.verify(token,"abcde")
        req.user=await User.findById(decoded.id).select("-password")
        
    } catch (error) {
        console.error(error)
        throw new Error("token not authorized")
    }
    if(!token){
        throw new Error("Token not found")
    }
    // console.log(user)
    next()
})


export const admin=asyncHandler(async(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }
    else{
        res.status(401)
        throw new Error("Not an admin")
    }
})

const createBlog=async(req,res)=>{
    try{
        const newblog=await Blogs.create(
            {
                title:req.body.title,
                imageURL:req.body.imageURL,
                body:req.body.body,
            })
            res.send("Blog has been created")

    }
    catch(error){
        res.status('415').send("Error creating blog")

    }
    
}
const updateBlog=asyncHandler(async(req,res)=>{
    const {_id,title,imageURL,body}=req.body
    const blog=await Blogs.findById(_id)
    if(blog){
        blog.title=title
        blog.imageURL=imageURL
        blog.body=body
        const updatedblog=await blog.save()
        res.status(201).json(updatedblog)
    }
    else{
        res.status(404)
        throw new Error("Blog not found")        
    }
})
const viewAllBlog=asyncHandler(async(req,res)=>{
    const blogs=await Blogs.find()
    res.json(blogs)
    console.log(req.user);
})
const viewBlog=asyncHandler(async(req,res)=>{
    const blogs=await Blogs.findById(req.params.id)
    if (blogs){
        res.json(blogs)
    }
    else{
        res.status(404)
        throw new Error("Cant find Blog")
    }
    res.json(blogs)
    console.log(req.user);
})
const deleteBlog=asyncHandler(async(req,res)=>{
    const blog=await Blogs.deleteOne({_id:req.params.id})
    console.log(blog);
    if(blog){
        res.send(`Blog with id:${req.params.id} has been deleted`)
    }
    else{
        throw new Error('Cant find the blog')
    }
})  


router.route("/").get(protect,viewAllBlog).post(protect,admin,createBlog)
router.route("/:id").get(protect,viewBlog).put(protect,admin,updateBlog).delete(protect,admin,deleteBlog)

router.get("/getblogs",async(req,res)=>{

    try{
        const blogs = await Blogs.find({})
        res.send(blogs)
    }
    catch (error){
        return res.status(400).json({message:error});
    }
})
export default router