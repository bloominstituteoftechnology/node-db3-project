const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const errorHandler = require("./middleware/errorHandler");

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);
server.use(errorHandler);

module.exports = server;