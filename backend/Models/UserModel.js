import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    name:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const UserModel=mongoose.model('Users',UserSchema)

export default UserModel
