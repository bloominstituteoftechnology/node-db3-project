const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use(logger)
server.use('/api/schemes', SchemeRouter);


// Request type and timestamp middleware
function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  console.log(`\nYou have made a ${method} request to ${url}\n`, Date())
  next()
};

module.exports = server;