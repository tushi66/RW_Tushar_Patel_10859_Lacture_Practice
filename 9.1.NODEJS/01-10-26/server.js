import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const app = express()

const PORT = process.env.PORT

const StudentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    course:String
})

const Student = mongoose.model("STuedent ", StudentSchema)

mongoose.connect(process.env.MONGODB_URL).then( () => {
    console.log("mongodb Conncted Succcesfully");
    
    const student = new Student({
        name:"Rahul",
        email:"rahul@gmail.com",
        course:"Python",
        dob:"10-09-2026"
    })

    return student.save()
}).then(() => {
    console.log("Student Added Successfully.");
}).catch((err) => {
    console.log("MongoDB connection failed.");
    console.log(err);
})

app.get("/" , (req , res) => {
    res.send("Welcome to Node.js Application.")
})


app.listen(PORT , () => {
    console.log(`Server start on port ${PORT}`);
})