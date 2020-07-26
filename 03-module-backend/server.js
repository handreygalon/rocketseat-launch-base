const express = require('express')
const nunjuncks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjuncks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("about")
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("Server is running!")
})