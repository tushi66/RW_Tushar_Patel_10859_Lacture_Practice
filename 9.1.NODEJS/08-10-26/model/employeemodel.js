import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{type:String , required:true , trim:true},
    email:{type:String , required:true , trim:true , unique:true},
    password:{type:String , required:true},
    gender:{type:String , required:true},
    hobby:{type:[String] , default:[]},
    city:{type:String , required:true , trim:true},
    file:{type:String , default:null}
} , {timestamps:true})


export default mongoose.model("Employee" , employeeSchema)