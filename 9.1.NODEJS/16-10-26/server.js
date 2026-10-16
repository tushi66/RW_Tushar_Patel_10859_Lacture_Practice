import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import bookRouter from'./routes/bookroutes.js'
import employeeRouter from './routes/employeeroutes.js'
import errorHandler from './middleware/errorHandler.js'
import cors from 'cors'
import ejs from 'ejs'


dotenv.config()



const app = express()


app.use(cors({
    origin:"*"
}))

app.set('view engine' , 'ejs')
app.set('views' , "./views")

const PORT = process.env.PORT || 4000

connectDB()

// middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/uploads', express.static("uploads"))
app.use(express.static('public'))


// API

app.get('/' , (req , res) => res.redirect("/dashboard"))

app.get('/dashboard' , (req , res) => {
    res.render("dashboard")
})


app.get('/', (req, res) =>{
    res.json({
        success : true,
        message: "Node.js Rest API is Running....."
    })
})

// Routes 

app.use("/api/employees", employeeRouter)
app.use("/api/books", bookRouter)

// 404 error

app.use((req, res) => {
    res.status(404).json({
        success : false,
        message : "Routes not Found"
    })
})

// erorr 

app.use(errorHandler)


app.listen(PORT, (err) =>{
    err ? console.log(err) : console.log(`Server Start : http://localhost:${PORT}`);
       
})