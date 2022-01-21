import mongoose  from "mongoose";

const ReviewSchema=mongoose.Schema({
    comment:String,
    Like:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
    
})

const BlogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    reviews:[ReviewSchema]


},{timestamps:true}
)

export default mongoose.model('Blogs',BlogSchema)