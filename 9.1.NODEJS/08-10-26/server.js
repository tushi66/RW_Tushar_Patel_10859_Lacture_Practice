import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT

connectDB()

app.get('/', (req, res)=>{
    res.send("NodeJS BOOKS AND EM{PLYEE MODULE")
})

app.listen(PORT, (err) =>{
    err ? console.log(err) : console.log(`Server Start : http://localhost:${PORT}`);
       
})