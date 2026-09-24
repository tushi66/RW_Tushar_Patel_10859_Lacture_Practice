const { log } = require("console");
const http = require("http");

const port = 3000;


const server = http.createServer((req, res) => {

    res.end("Hello World Welocme to The Node JS")

});

server.listen(port, () => {
    // console.log(`Server running at ${port}`);

    console.log("Hello World ");
    
    
})