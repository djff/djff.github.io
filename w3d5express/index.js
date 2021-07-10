const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        console.log("index method here");
    }

    if(url === "/message" && method === "GET"){
        console.log("post request on server");
    }
})

server.listen(3000);