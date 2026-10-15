import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:String , required:true , trim:true},
    author:{type:String , required:true , trim:true},
    category:{type:String , required:true , trim:true},
    price:{type:Number , required:true , min:0},
    quantity:{type:Number , required:true , min:1},
    publishYear:{type:Number},
},{timestamps:true})

export default mongoose.model("BookSchema", bookSchema)