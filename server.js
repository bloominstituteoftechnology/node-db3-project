const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/', SchemeRouter);

module.exports = server;