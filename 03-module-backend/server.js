const express = require('express')
const nunjuncks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjuncks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio")
})

server.listen(5000, function() {
    console.log("Server is running!")
})