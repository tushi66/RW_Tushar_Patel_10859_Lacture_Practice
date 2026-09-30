import express from 'express'
import mongoose from 'mongoose'


const app = express()
const port = 3000


const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    course : String
})

const Student = mongoose.model("Student", studentSchema)


mongoose.connect("mongodb+srv://tuhd8066_db_user:Yj9uNldiDhKfcQDW@cluster01.vqjpusn.mongodb.net/?appName=Cluster01").then( ()=> {

    console.log("MongoDB Connected Succesfully");
    
    const student = new Student({
        name: "rahul",
        age: 25,
        email: "abc@gmail.com",
        course : "Full Stack"
    })

    return student.save()
}).then(()=>{
    console.log("Student data added succesfully");
    
}).catch( (err) => {
    console.log(err);
    
})


app.get( '/' ,  (req, res) => {
    res.send("Welocme to The Node.js Application")
})

app.listen( port, () =>{
    console.log("Srver start in Port 3000");
    
} )