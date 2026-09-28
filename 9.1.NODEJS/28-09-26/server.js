// Node JS KeyWords....




// 1. require() : Import Module / package
// 2. express : express.js framwork
// 3. const: Create a Const Variable
// 4. app : Express Application 
// 5. express() : Create Express Application 
// 6. PORT : Sever Port Number 
// 7. app.use(): ADD MIDDLEWARE
// 8. MIDDLEWARE  : Funcation between request and Response
// 9. express.json():  Read JSON Request Only 
// 10. app.get() : Get Route
// 11. app.post() : Post Route
// 12. app.put() : PUT Route
// 13. app.delete() : DELETE Route
// 14. req : Request Object
// 15. res : RESPONSE Object
// 16. req.params : URL Parameter
// 17. req.query() : Query Parameter
// 18. req.body : Request body data 
// 19. res.send() : send txt/ HTML Response
// 20. res,json() : send JSON response 
// 21. res.status : set HTTP status Code 
// 22. app,listen : start server 
// 23. console.log() : Print output in terminal 



import express from 'express'

const app = express()
const port = 3000

// middleware 

app.use(express.json())

// Route 

app.get( '/' , (req , res) => {
    res.send("Welcome to Express.js")
})


app.get('/about' , (req , res) => {
    res.send("This is About Page")
})

app.get('/contact' , (req , res) => {
    res.send("This is Contact Page")
})



app.get('/person' , (req , res) => {
    const person = {
        id : 1,
        name : "Rahul",
        age : 22,
        email : "rahul@gmail.com"
    }

    res.json(person )
})

    const person = [
    {
        id : 1,
        name : "Rahul",
        age : 22,
        email : "rahul@gmail.com"
    },
    {
        id : 2,
        name : "Rahul",
        age : 22,
        email : "rahul@gmail.com"
    },
    {
        id : 3,
        name : "Rahul",
        age : 22,
        email : "rahul@gmail.com"
    }
]

app.get('/persons' , (req , res) => {

    res.json(person )
})

app.get('/persons/:id' , (req , res) => {
    const id = req.params.id;
    const persons = person.filter(item => item.id == id)
    console.log(persons)
    res.send(persons)
})






app.listen(port, () => {
    console.log("Server Start in port LocalHost : 3000");
    
})


