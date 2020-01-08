const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get("/", (req, res, next) => {
    res.send("<h2>I am your sanity check.</h2>")
})

module.exports = server;