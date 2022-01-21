import mongoose from "mongoose"
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect("mongodb+srv://9898913180:9898913180@cluster0.viwzi.mongodb.net/mern-blog",{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`MongoDB connection ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB