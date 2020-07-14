const express = require('express')
const nunjuncks = require('nunjucks')

const server = express()

server.set("view engine", "html")

nunjuncks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.send("Hi!!")
})

server.listen(5000, function() {
    console.log("Server is running!")
})