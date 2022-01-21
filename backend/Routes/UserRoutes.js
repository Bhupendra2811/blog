import express from "express"
import asyncHandler from "express-async-handler"
import User from "../Models/UserModel.js"
import generatewebtoken from "../config/GenerateWebTokens.js"
const routes=express()

routes.post("/register",asyncHandler(async(req,res)=>{
    
    try {
        
        const user=await User.findOne({email:req.body.email})
        if (user){
            res.status(409).send("Email already exists")
        }
        else{
            const createdUser=await User.create({
                email:req.body.email,
                password:req.body.password,
                name:req.body.name,
                phoneNo:req.body.phno
            })
            res.json({
                _id:createdUser._id,
                name:createdUser.name,
                email:createdUser.email,
                token:generatewebtoken(createdUser._id)
            })
        }
    } catch (error) {
        console.log(error);
    }
}))

routes.post("/login",asyncHandler(async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    if (user && user.password==req.body.password){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generatewebtoken(user._id)
        })
    }
    else{
        res.status(401).send("Invalid email or password")
    }
    
})) 

export default routes